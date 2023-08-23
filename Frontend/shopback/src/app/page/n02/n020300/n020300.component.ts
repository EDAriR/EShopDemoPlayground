import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PathService } from 'src/app/core/services/api/path';
import { DashboardDataService } from 'src/app/dashboard/dashboard-data-service.service';
import { ReturnDialogComponent } from 'src/app/share/dialog/return-dialog/return-dialog.component';
import { Categories } from '../n020100/categories';
import { CommodityStatus } from '../n020100/commodityStatus';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-n020300',
  templateUrl: './n020300.component.html',
  styleUrls: ['./n020300.component.scss']
})
export class N020300Component  {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  panelOpenState = true;

  form = new FormGroup({
    docCode: new FormControl(''),
    docName: new FormControl(''),
    status: new FormControl(''),
    categories: new FormControl(''),
  });

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private dashboardDataService: DashboardDataService) { }

  ngOnInit(): void {
    this.dashboardDataService.setShowDashboardData(false);
  }

  // 查詢
  clickPage(){

  }

  linkToEdit(i: number): void {
    this.router.navigate([PathService.add]);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

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

  openDialog(): any {
    const dialogRef = this.dialog.open(ReturnDialogComponent, {
      hasBackdrop: false,
      data: {
        title: '刪除成功',
      },
    });
  }
}





