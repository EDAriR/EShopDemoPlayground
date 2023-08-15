import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError  } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO 請求要再做額外的包裝，管理。寫這裡
    // return next.handle(req).pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     console.log('error', error);
    //     throwError(error);
    //     return of(null);
    //   })
    // );
    // console.log(req)
    return next.handle(req);
  }
}
