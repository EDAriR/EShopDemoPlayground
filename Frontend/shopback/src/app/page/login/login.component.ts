import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../core/services/api/auth.service';
import { Sha256Service } from '../../core/services/sha-256.service';
import { setTokenSession } from '../../core/utils/storage';
import { AccessTokenRes } from '../../model/auth/accessToken/accessTokenRes';
import { AlertDialogComponent } from '../../share/dialog/alert-dialog/alert-dialog.component';
import { UserIdService } from './../../core/services/user-id.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('', '');

  token: any;
  allowLogin = false;

  constructor(
    private http: HttpClient,
    // private authSvc: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private sha256: Sha256Service,
    private userIdSvc: UserIdService,
  ) { }
  ngOnInit(): void { }

  showDialog(title?: string, content?: string): void {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        title: title,
        content: content,
      },
      width: '20rem'
    });
    dialogRef.afterClosed();
  }

  login() {
    const sha256User = Object.assign({}, this.user);
    if (environment.sha256) {
      sha256User.authSecret = this.sha256.sha256Password(sha256User.authSecret)
    }
    const self = this
    self.userIdSvc.userId = sha256User.authId
    self.router.navigate(['dashboard/n00'])
    self.allowLogin = true;

    // this.authSvc.apiLogin('auth/accessToken', sha256User).subscribe({
    //   next(res: AccessTokenRes) {
    //     if (res === undefined) {
    //       self.user = new User('', '')
    //     } else {
    //       if (environment.tokenService) {
    //         self.authSvc.token = res.token
    //       } else {
    //         setTokenSession('token', res.token)
    //       }

    //       self.authSvc.authId = sha256User.authId
    //       self.userIdSvc.userId = sha256User.authId
    //       self.router.navigate(['dashboard'])
    //       self.allowLogin = true;
    //     }
    //   },
    //   error() {
    //     self.user = new User('', '')
    //   }
    // })

  }
}
