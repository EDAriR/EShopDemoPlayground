import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, pluck, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { body } from '../../model/body';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  logger: any;
  constructor(
    private http: HttpClient,
    private error: ErrorService
  ) {}

  getJson(url: string): any {
    // this.spinner.show();
    return (
      this.http
        .get<any>(environment.apiUrl + url, {
          observe: 'response',
          responseType: 'json',
        })
        // 當執行失敗時會重複執行三次，若都未成功執行回傳Log
        .pipe(
          retry(3),
          catchError(this.error.handleError)
        )
    );
  }

  /**
   * 發送POST給API
   *
   * @param url api位址
   * @param param 要傳給api的body
   * @returns api response body result內容
   */
  postAPI(url: string, param?: object): any {
    const body = this.setBody(url, param);
    console.log(environment.swUrl + url)
    return (
      this.http
      .post<body>(environment.swUrl + url, body)
      .pipe(
        tap((res) => this.logger.info('response :', res)),
        map((value) => {
            console.log(value)
            this.error.checkMsgCode(value);
            return value;
          }),
          pluck('result'),
          retry(3),
          catchError((err) => {
            this.error.handleError(err);
            return throwError(err);
          })
        )
    );
  }

  postJson(url: string, obj: any): Observable<Response> {
    // req res log紀錄格式待定，與cynthia確認規格後修改
    this.logger.info('Post req url :', url + 'Post req obj ', obj);
    return this.http
      .post<any>(
        environment.apiUrl + url,
        {
          observe: 'response',
          responseType: 'json',
        },
        obj
      )
      .pipe(
        retry(3),
        catchError(this.error.handleError)
      );
  }

  uploadCsv(url: string, file: File): Observable<Response> {
    if (!file) {
      return new Observable<Response>;
    }
    const req = new HttpRequest('POST', url, file);
    return this.http.request(req).pipe(catchError(this.error.handleError));
  }

  // 傳入body
  setBody(url: string, param?: object) {
    const path= this.getApiId(url);
    const body: object = {
      apiId: path,
      txDateTime: '',
      params: param
    };
    return body;
  }

  // 取得apiId
  getApiId(url: string): string {
    return url.substring(url.lastIndexOf('/') + 1, url.length);
  }
}
