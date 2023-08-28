import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { Router } from '@angular/router';
import { PathService } from 'src/app/core/services/api/path';
import { DashboardDataService } from 'src/app/dashboard/dashboard-data-service.service';
import { Categories } from '../n020100/categories';
import { CommodityStatus } from '../n020100/commodityStatus';
import { PeriodicElement } from './periodicElement';

//刪除框框 群組名稱 tag 發送訊息 修改



@Component({
  selector: 'app-n020300',
  templateUrl: './n020300.component.html',
  styleUrls: ['./n020300.component.scss']
})
export class N020300Component {
  displayedColumns: string[] = ['select', 'index', 'group', 'tag', 'message'];
  selection = new SelectionModel<PeriodicElement>(true, []);
  dataSource: MatTableDataSource<PeriodicElement, MatTableDataSourcePaginator> = new MatTableDataSource<PeriodicElement>;
  showData = false; // table顯示控制

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
  clickPage() {
    this.showData = true;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  }
  // 導頁至編輯頁
  navigateToEditPage(item: any) {
    this.router.navigate([PathService.add], { state: { data: item } });
  }


  deleteSelected() {
    // 取得選取的項目的 id
    const selectedIds = this.selection.selected.map(item => item.id);
    // 過濾出不包含在選取的 id 中的項目
    const filteredData = this.ELEMENT_DATA.filter(item => !selectedIds.includes(item.id));
    // 更新 ELEMENT_DATA
    this.dataSource = new MatTableDataSource<PeriodicElement>(filteredData);
    // 清除選取
    this.selection.clear();
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
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
  ELEMENT_DATA: PeriodicElement[] = [
    { id: '203213145', group: 'Hydrogen', tag: ['1.0079', 'eded'], message: '樹電車活是，和題著不！策三不，參了局推中使輪，成能漸國成場色造香，金成見後方長在愛賽容可電型友行種地。本用片此怎他書藝觀只使傳；都口裝離下裡公不也日人府眼快然當員然作子同時成園手：知地中公子。度生再設常子，規大母不資。司在驚該，元過發，小感總做的死輪相己數不後朋。' },
    { id: '20321332231145', group: 'Helium', tag: ['4.0026', 'eded'], message: 'He' },
    { id: '203000213145', group: 'Lithium', tag: ['6.941', 'eded99大家'], message: 'Li' },
    { id: '203111213145', group: 'Beryllium', tag: ['9.0122', 'test??'], message: 'Be' },
    { id: '203244413145', group: 'Boron', tag: ['10.811'], message: 'B' },
    { id: '20321312345', group: 'Carbon', tag: ['12.0107', 'gogo test'], message: 'C' },
    { id: '203232313145', group: 'Nitrogen', tag: ['14.0067', 'eded贊贊贊'], message: 'N' },
    { id: '203222213145', group: 'Oxygen', tag: ['15.9994', '9988'], message: 'O' },
    { id: '203213333145', group: 'Fluorine', tag: ['18.9984', 'test', 'eded'], message: 'F' },
    { id: '20321332145', group: 'Neon', tag: ['20.1797', 'eded94神'], message: 'Ne' },
  ];


  // openDialog(): any {
  //   const dialogRef = this.dialog.open(ReturnDialogComponent, {
  //     hasBackdrop: false,
  //     data: {
  //       title: '刪除成功',
  //     },
  //   });
  // }
}





