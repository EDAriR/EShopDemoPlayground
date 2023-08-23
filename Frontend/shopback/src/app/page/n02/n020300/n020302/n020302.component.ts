import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommodityStatus } from '../../n020100/commodityStatus';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ReturnDialogComponent } from 'src/app/share/dialog/return-dialog/return-dialog.component';

@Component({
  selector: 'app-n020302',
  templateUrl: './n020302.component.html',
  styleUrls: ['./n020302.component.scss']
})
export class N020302Component {


  constructor(
    public dialog: MatDialog,
    private location: Location,
  ) { }
  ngOnInit(): void { }

  form = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    describe: new FormControl(''),
  });



  status: CommodityStatus[] = [
    { value: '0', viewValue: '待上架' },
    { value: '1', viewValue: '已上架' },
    { value: '2', viewValue: '已隱藏' },
    { value: '3', viewValue: '已下架' },
  ];

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
