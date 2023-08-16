import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessTokenReq } from 'src/app/model/auth/accessToken/accessTokenReq';
import { environment } from 'src/environments/environment';
import { getTokenSession } from '../../utils/storage';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token: any;
  authId: any;

  constructor(
    public http: HttpClient,
    private router: Router,
    private HttpClients: HttpClientService
    ) { }

  headers = new HttpHeaders({
    'Content-Type': 'text/json',
  });
  options = {
    headers : this.headers
  };

  //取得token
  getToken(): any{
    if(getTokenSession('token')===null){
      const storageString = ''
      sessionStorage.setItem('token',JSON.stringify(storageString));
    }else{
      return getTokenSession('token')
    }
  }

  // 帳號登出
  apiLogout(url: string): void{
    // this.http.get<any>(environment.apiUrl + url);
    if(!environment.tokenService){
      sessionStorage.removeItem('token')
    }
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

    /** 帳號登入API */
  apiLogin(url: string, data: AccessTokenReq): Observable<any>{
    return this.HttpClients.postAPI(url,data);
  }
}
