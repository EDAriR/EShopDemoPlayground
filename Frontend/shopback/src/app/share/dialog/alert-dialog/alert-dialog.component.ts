import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  get title(): void{
    return this.data.title;
  }
  get content(): void{
    return this.data.content;
  }

  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>, // 呼叫dialog方法
    @Inject(MAT_DIALOG_DATA) private data: any,
    // 接收從主頁面來的資料，目前給login.component.html使用`` {{data.content}}
    ) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();  // 關閉dialog function
  }

}
