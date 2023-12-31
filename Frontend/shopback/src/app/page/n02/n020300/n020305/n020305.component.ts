import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Const } from 'src/app/core/services/const';
import { ReturnDialogComponent } from 'src/app/share/dialog/return-dialog/return-dialog.component';

@Component({
  selector: 'app-n020305',
  templateUrl: './n020305.component.html',
  styleUrls: ['./n020305.component.scss']
})
export class N020305Component {
  constructor(
    public dialog: MatDialog,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  data: any; // 定義用於存儲資料的變數
  tagString: string = '';
  const = Const;

  ngOnInit() {
    this.data = history.state.data; // 從路由狀態中獲取資料
    this.tagString = this.data.tag.join(', ');

  }




  goBack(): void {
    this.location.back();
  }

  openDialog(): any {
    const dialogRef = this.dialog.open(ReturnDialogComponent, {
      hasBackdrop: false,
      data: {
        title: '儲存成功',
      },
    });
  }
}
