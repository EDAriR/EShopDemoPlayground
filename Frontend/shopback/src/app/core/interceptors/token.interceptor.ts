import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../services/api/auth.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    public auth: AuthService,
    ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `${environment.tokenService? this.auth.token:this.auth.getToken()}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Access-Control-Max-Age': '86400',
        'Cache-Control': 'no-cache',
      }
    });

    return next.handle(request);
  }

}
