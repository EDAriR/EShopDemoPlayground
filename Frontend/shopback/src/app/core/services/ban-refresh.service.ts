import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/share/dialog/alert-dialog/alert-dialog.component';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class BanRefreshService {

  constructor(
    private eventManager: EventManager,
    public dialog: MatDialog,

  ) {
    if(environment.banRefresh){
      this.eventManager.addGlobalEventListener('window', 'keydown', (event: any) => {
        if (event.keyCode === 116) {

          this.dialog.open(AlertDialogComponent, {
            data: {
              title: '請勿重新整理',
            },
            width: '20rem'
          })

          if (event.preventDefault) {
          // chrome、firefox、IE9+
            event.preventDefault();
          } else {
          // IE8-
            event.keyCode = 0;
            event.cancelBubble = true;
            return false;
          }
        }
      });
    }


  }
}
