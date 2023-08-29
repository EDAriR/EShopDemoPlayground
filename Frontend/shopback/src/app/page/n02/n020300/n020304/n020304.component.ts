import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommodityStatus } from '../../n020100/commodityStatus';
import { N0203dialogComponent } from '../n0203dialog/n0203dialog.component';

@Component({
  selector: 'app-n020304',
  templateUrl: './n020304.component.html',
  styleUrls: ['./n020304.component.scss']
})
export class N020304Component {

  constructor(
    public dialog: MatDialog,
    private location: Location,
  ) { }
  ngOnInit(): void { }

  form = new FormGroup({
    status: new FormControl(''),
    describe: new FormControl(''),
  });

  status: CommodityStatus[] = [
    { value: '0', viewValue: '緊急通知' },
    { value: '1', viewValue: '測試' },
    { value: '2', viewValue: 'test 123' },
    { value: '3', viewValue: 'test 223' },
  ];
  goBack(): void {
    this.location.back();
  }
  openDialog(): any {
    this.dialog.open(N0203dialogComponent, {
      data: {
        animal: 'panda',
      },
    });
    // const dialogRef = this.dialog.open(ReturnDialogComponent, {
    //   hasBackdrop: false,
    //   data: {
    //     title: '發送成功',
    //   },
    // });
  }
}
