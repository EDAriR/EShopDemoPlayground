import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FrontendConfigService } from 'src/app/core/services/api/frontend-config.service';
import { Const } from 'src/app/core/services/const';
import { ReturnDialogComponent } from 'src/app/share/dialog/return-dialog/return-dialog.component';

@Component({
  selector: 'app-n070200',
  templateUrl: './n070200.component.html',
  styleUrls: ['./n070200.component.scss']
})
export class N070200Component {
  form: FormGroup;
  const = Const;
  isOption1Selected: number | null = null;
  constructor(
    public dialog: MatDialog,
    public fcSvc: FrontendConfigService
  ) {
    this.form = new FormGroup({
      addHtml: new FormControl(''),
      upPic: new FormControl(''),
      editPic: new FormControl(''),
      carousel: new FormControl('', Validators.required)
    });
  }

  checkSelectedValue(): void {
    const selectedValue = this.form.get('carousel')?.value;

    if (selectedValue === '1') {
      this.isOption1Selected = 1;
    } else if (selectedValue === '2') {
      this.isOption1Selected = 2;
    } else if (selectedValue === '3') {
      this.isOption1Selected = 3;
    } else {
      console.log('No option selected');
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
