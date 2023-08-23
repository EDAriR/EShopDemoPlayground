import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PathService } from 'src/app/core/services/api/path';
import { DashboardDataService } from 'src/app/dashboard/dashboard-data-service.service';
import { Categories } from './categories';
import { CommodityStatus } from './commodityStatus';
import { ProductElement } from './productElement';

@Component({
  selector: 'app-n020100',
  templateUrl: './n020100.component.html',
  styleUrls: ['./n020100.component.scss']
})



export class N020100Component {
  panelOpenState = true;
  form = new FormGroup({
    docCode: new FormControl(''),
    docName: new FormControl(''),
    status: new FormControl(''),
    categories: new FormControl(''),
  });

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private dashboardDataService: DashboardDataService) { }

  ngOnInit(): void {
    this.dashboardDataService.setShowDashboardData(false);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  clickPage(){

  }

  displayedColumns: string[] = ['position', 'pic', 'name', 'tag', 'price', 'num', 'sales', 'status'];
  dataSource = new MatTableDataSource<ProductElement>(ELEMENT_DATA);

  categories: Categories[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  status: CommodityStatus[] = [
    { value: '0', viewValue: '待上架' },
    { value: '1', viewValue: '已上架' },
    { value: '2', viewValue: '已隱藏' },
    { value: '3', viewValue: '已下架' },
  ];
}


const ELEMENT_DATA: ProductElement[] = [
  { position: '2023081613070001', pic: 'Hydrogen', name: '測試商品', tag: ['已接單', 'U質'], price: '12,300', num: '001', sales: '1000', status: 'Y' },
];
