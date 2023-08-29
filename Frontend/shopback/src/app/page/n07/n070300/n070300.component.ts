import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ReturnDialogComponent } from 'src/app/share/dialog/return-dialog/return-dialog.component';

@Component({
  selector: 'app-n070300',
  templateUrl: './n070300.component.html',
  styleUrls: ['./n070300.component.scss']
})
export class N070300Component {
  data: any; // 定義用於存儲資料的變數
  form: FormGroup;
  tagString: string = '';

  constructor(
    public dialog: MatDialog,
  ) {
    this.form = new FormGroup({
      name: new FormControl(''),
      title: new FormControl(''),
      describe: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.data = history.state.data; // 從路由狀態中獲取資料
    if (this.data !== undefined) {
      this.tagString = this.data.tag.join(', ');
      const data = {
        name: this.data.group,
        title: this.tagString,
        describe: this.data.message,
      };
      this.form.patchValue(data);
    }
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
