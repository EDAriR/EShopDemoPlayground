import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommodityStatus } from '../n020100/commodityStatus';
import { Location } from '@angular/common';
import { Const } from 'src/app/core/services/const';

@Component({
  selector: 'app-n020200',
  templateUrl: './n020200.component.html',
  styleUrls: ['./n020200.component.scss']
})
export class N020200Component {
  const = Const;

  constructor(private location: Location,) { }

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

}
