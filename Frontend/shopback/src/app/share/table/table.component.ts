import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  MatPaginator,
  MatPaginatorIntl,
  PageEvent
} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { Const } from 'src/app/core/services/const';

interface ColumnDefs {
  key: string;
  label: number;
  link?: boolean;
}
interface PaginatorConfig {
  showPaginator?: boolean;
  totalCount?: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator)
  set paginator(value: MatPaginator) {
    if (this.paginatorConfig.showPaginator) {
      this.dataSource.paginator = value;
    }
  }
  @Input() dataSource = new MatTableDataSource<any>();
  @Input() columndefs: ColumnDefs[];
  @Input('class') classNames = '';
  @Input() inputValue = '';
  @Input() paginatorConfig: PaginatorConfig = {
    showPaginator: false,
  };
  // @Input() routerLink;
  @Output() route = new EventEmitter<number>();
  @Output() duplicate = new EventEmitter();
  columnsProps = [];
  tableInfo = '';
  pageIndex = 0;
  nowData = moment().format('YYYYMMDD');
  constructor(private matPaginatorIntl: MatPaginatorIntl) {}

  ngOnInit(): void {
    this.setPaginatorText();
  }

  toNumber(value: string): number {
    return parseInt(value, 10);
  }

  /**
   * 設定 paginator 顯示文字
   */
  setPaginatorText(): void {
    this.matPaginatorIntl.itemsPerPageLabel = Const.pageLabel;
    this.matPaginatorIntl.nextPageLabel = Const.nextPage;
    this.matPaginatorIntl.previousPageLabel = Const.previousPage;
  }

  ngOnChanges(): void {
    if (this.inputValue !== '') {
      this.tableInfo = '關鍵字' + this.inputValue + '查無資料';
    } else {
      this.tableInfo = '目前尚無資料';
    }
    this.inputValue = '';
    this.columnsProps = this.columndefs.map((column) => column.key);
  }

  /**
   *
   * @param event 列表paginator 事件觸發，取得列表所在頁數(pageIndex)
   */
  getPageIndex(event?: PageEvent) {
    this.pageIndex = event.pageIndex * 10;
  }

  /**
   *
   * @param i 跳轉事件table index索引
   */
  linkToEdit(i: number): void {
    this.route.emit(i + this.pageIndex);
  }
  clickCopy(i: number): void {
    this.duplicate.emit(i + this.pageIndex);
  }
  checkIfShowCopy(element: any): boolean {
    const efDate = Object.keys(element).find((key) => key.endsWith('EfDate'));
    const status = Object.keys(element).find((key) => key.endsWith('Status'));
    if (this.columnsProps.includes('copyBtn')) {
      return (
        element[status] === '2' &&
        this.toNumber(element[efDate]) < this.toNumber(this.nowData)
      );
    } else {
      return false;
    }
  }
}
