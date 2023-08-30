import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: string,
  name: string,
  preview: string;
  sort: number;
  directions: string;
  link: string;
  status: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: '20230813001',
    name: '2023-08-10 上午11.16.58.png',
    preview: '/assets/img/logo.jpg', sort: 1,
    directions: 'test test test test test test test test test test test test test test test test test test test',
    link: 'http://localhost:4200/dashboard/n070200',
    status: true,
  },
];

@Component({
  selector: 'app-n070201',
  templateUrl: './n070201.component.html',
  styleUrls: ['./n070201.component.scss']
})
export class N070201Component implements OnInit {
  myForm: FormGroup;

  //圖片預覽 排序 說明 連結 狀態 操作
  //preview sort directions link status operate
  displayedColumns: string[] = ['preview', 'sort', 'directions', 'link', 'status', 'operate'];
  dataSource = ELEMENT_DATA;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({});
    // this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngOnInit(): void {
    this.dataSource.forEach((item, index) => {
      this.myForm.addControl('sort' + index, this.formBuilder.control(item.sort));
      this.myForm.addControl('directions' + index, this.formBuilder.control(item.directions));
      this.myForm.addControl('link' + index, this.formBuilder.control(item.link));
      this.myForm.addControl('status' + index, this.formBuilder.control(item.status));
    });
  }

  // 刪除輪播圖片
  updatePic() {
    console.log('do something')
  }
}
