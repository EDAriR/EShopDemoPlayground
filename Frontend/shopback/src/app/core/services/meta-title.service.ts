import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaTitleService {
  constructor(private titleService: Title, private http: HttpClient) { }

  //待修改為從 API 取得
  setGlobalTitleFromApi(): Observable<any> {
    return this.http.get('API URL');
  }

  setGlobalTitle(title: string): void {
    this.titleService.setTitle(title);
  }
}

