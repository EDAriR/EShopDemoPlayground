import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PathService } from 'src/app/core/services/api/path';
import { DashboardDataService } from 'src/app/dashboard/dashboard-data-service.service';

@Component({
  selector: 'app-n010100',
  templateUrl: './n010100.component.html',
  styleUrls: ['./n010100.component.scss']
})
export class N010100Component implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'day', 'status', 'payStatus', 'deliveryStatus', 'amount'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router,
    private dashboardDataService: DashboardDataService  ) { }

  ngOnInit(): void {
    this.dashboardDataService.setShowDashboardData(false);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  //點使用者觸發，並跳轉頁面
  route(serialNumber: string) {
    // saveApiId(this.dataSource.data[serialNumber].docName);
    this.router.navigate([PathService.OnlineOrderEditor]);
  }

  linkToEdit(i: number): void {
    this.router.navigate([PathService.OnlineOrderEditor]);
  }
}


export interface PeriodicElement {
  name: string;
  position: string;
  day: string;
  status: string;
  payStatus: string;
  deliveryStatus: string;
  amount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '2023081613070001', name: 'Hydrogen', day: '2023/08/16 15:00', status: '已接單', payStatus: '未付款', deliveryStatus: '備貨中', amount: '1000' },
  { position: '2023081613070001', name: 'Helium', day: '2023/08/16 15:00', status: '已確認', payStatus: '付款失敗', deliveryStatus: '發貨中', amount: '234' },
  { position: '2023081613070001', name: 'Lithium', day: '2023/08/16 15:00', status: '已完成', payStatus: '超過付款時間', deliveryStatus: '已發貨', amount: '99044' },
  { position: '2023081613070001', name: 'Beryllium', day: '2023/08/16 15:00', status: '已取消', payStatus: '已付款', deliveryStatus: '已到達', amount: '2423525' },
  { position: '2023081613070001', name: 'Boron', day: '2023/08/16 15:00', status: '已確認', payStatus: '退款中', deliveryStatus: '已取貨', amount: '5453' },
  { position: '2023081613070001', name: 'Carbon', day: '2023/08/16 15:00', status: '已接單', payStatus: '已退款', deliveryStatus: '退貨中', amount: '5533' },
  { position: '2023081613070001', name: 'Nitrogen', day: '2023/08/16 15:00', status: '已取消', payStatus: '付款失敗', deliveryStatus: '已退貨', amount: '689' },
  { position: '2023081613070001', name: 'Oxygen', day: '2023/08/16 15:00', status: '已完成', payStatus: '未付款', deliveryStatus: '已到達', amount: '6654' },
  { position: '2023081613070009', name: 'Fluorine', day: '2023/08/16 15:00', status: '已完成', payStatus: '未付款', deliveryStatus: '發貨中', amount: '3555' },
  { position: '2023081613070010', name: 'Neon', day: '2023/08/16 15:00', status: '已完成', payStatus: '已付款', deliveryStatus: '已到達', amount: '124' },
  { position: '2023081613070011', name: 'Sodium', day: '2023/08/16 15:00', status: '已接單', payStatus: '未付款', deliveryStatus: '已到達', amount: '446' },
  { position: '2023081613070012', name: 'Magnesium', day: '2023/08/16 15:00', status: '已確認', payStatus: '已退款', deliveryStatus: '已到達', amount: '973' },
  { position: '2023081613070013', name: 'Aluminum', day: '2023/08/16 15:00', status: '已完成', payStatus: '未付款', deliveryStatus: '發貨中', amount: '424' },
  { position: '2023081613070014', name: 'Silicon', day: '2023/08/16 15:00', status: '已接單', payStatus: '付款失敗', deliveryStatus: '已取貨', amount: '4241' },
  { position: '2023081613070015', name: 'Phosphorus', day: '2023/08/16 15:00', status: '已確認', payStatus: '已付款', deliveryStatus: '發貨中', amount: '667' },
  { position: '2023081613070016', name: 'Sulfur', day: '2023/08/16 15:00', status: '已完成', payStatus: '已付款', deliveryStatus: '已取貨', amount: '888' },
  { position: '2023081613070017', name: 'Chlorine', day: '2023/08/16 15:00', status: '已確認', payStatus: '超過付款時間', deliveryStatus: '已取貨', amount: '999' },
  { position: '2023081613070018', name: 'Argon', day: '2023/08/16 15:00', status: '已取消', payStatus: '已付款', deliveryStatus: '備貨中', amount: '5656' },
  { position: '2023081613070019', name: 'Potassium', day: '2023/08/16 15:00', status: '已完成', payStatus: '超過付款時間', deliveryStatus: '已到達', amount: '123' },
  { position: '2023081613070020', name: 'Calcium', day: '2023/08/16 15:00', status: '已取消', payStatus: '未付款', deliveryStatus: '備貨中', amount: '333' }
];
