import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AlertDialogComponent } from '../../share/dialog/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { getTokenSession } from '../utils/storage';
import { AuthService } from '../services/api/auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    public authSvc: AuthService,
    ) { }

  canActivate() {
    if(environment.tokenService){
      if(this.authSvc.token) {
        return true;
      } else {
        this.warmDialog();
      }
    } else {
      if(getTokenSession('token')){
        return true;
      } else {
        this.warmDialog();
      }
    }

  }

  public warmDialog(title?: any , content?: any): void{
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        content: '請登入會員'
      },
      width: '20rem'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['login']);
      return false;
    });
  }

}
