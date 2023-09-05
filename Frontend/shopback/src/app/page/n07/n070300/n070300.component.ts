import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FrontendConfigService } from 'src/app/core/services/api/frontend-config.service';
import { Const } from 'src/app/core/services/const';
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
  const = Const;

  constructor(
    public dialog: MatDialog,
    public fcSvc: FrontendConfigService
  ) {
    this.form = new FormGroup({
      tag: new FormControl(''),
      describe: new FormControl(''),
      keyWord: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 從 API 中獲取資料
    // this.fcSvc.metaInquiry({}).subscribe((result) => {
    //   if (result !== undefined) {
    //     const data = {
    //       title: result.title,
    //       description: result.description,
    //       keywords: result.keywords.join(', '),
    //     };
    //     this.form.patchValue(data);
    //   }
    // });

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
