import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Const } from 'src/app/core/services/const';
import { ReturnDialogComponent } from 'src/app/share/dialog/return-dialog/return-dialog.component';

@Component({
  selector: 'app-n070101',
  templateUrl: './n070101.component.html',
  styleUrls: ['./n070101.component.scss']
})
export class N070101Component {
  data: any; // 定義用於存儲資料的變數
  tagString: string = '';
  form: FormGroup;
  const = Const;

  constructor(
    public dialog: MatDialog,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      name: new FormControl(''),
      title: new FormControl(''),
      describe: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.data = history.state.data; // 從路由狀態中獲取資料
    console.log()
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
