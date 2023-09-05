import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { Router } from '@angular/router';
import { PathService } from 'src/app/core/services/api/path';
import { DashboardDataService } from 'src/app/dashboard/dashboard-data-service.service';
import { LatestNews } from './latestNews';

@Component({
  selector: 'app-n070100',
  templateUrl: './n070100.component.html',
  styleUrls: ['./n070100.component.scss']
})
export class N070100Component {
  displayedColumns: string[] = ['select', 'index', 'releaseDate', 'title', 'clicks', 'placeTop', 'edit'];
  selection = new SelectionModel<LatestNews>(true, []);
  dataSource: MatTableDataSource<LatestNews, MatTableDataSourcePaginator> = new MatTableDataSource<LatestNews>;
  showData = false; // table顯示控制

  panelOpenState = true;

  form = new FormGroup({
    docCode: new FormControl(''),
    docName: new FormControl(''),
    status: new FormControl(''),
    categories: new FormControl(''),
  });

  path = PathService
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private dashboardDataService: DashboardDataService) { }

  ngOnInit(): void {
    this.dashboardDataService.setShowDashboardData(false);
    this.dataSource = new MatTableDataSource<LatestNews>(this.ELEMENT_DATA);

  }

  // 導頁至編輯頁
  navigateToEditPage(item: any) {
    this.router.navigate([PathService.latestNews], { state: { data: item } });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: LatestNews): string {
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

  deleteSelected() {
    // 取得選取的項目的 id
    const selectedIds = this.selection.selected.map(item => item.id);
    // 過濾出不包含在選取的 id 中的項目
    const filteredData = this.ELEMENT_DATA.filter(item => !selectedIds.includes(item.id));
    // 更新 ELEMENT_DATA
    this.dataSource = new MatTableDataSource<LatestNews>(filteredData);
    // 清除選取
    this.selection.clear();
  }

  ELEMENT_DATA: LatestNews[] = [
    { id: '203213145', releaseDate: '2023/01/01', clicks: '222', placeTop: 'Y', title: '樹電車活是，和題著不！策三不，參了局推中使輪，成能漸國成場色造香，金成見後方長在愛賽容可電型友行種地。本用片此怎他書藝觀只使傳；都口裝離下裡公不也日人府眼快然當員然作子同時成園手：知地中公子。度生再設常子，規大母不資。司在驚該，元過發，小感總做的死輪相己數不後朋。' },
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





