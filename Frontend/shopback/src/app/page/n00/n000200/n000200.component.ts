import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-n000200',
  templateUrl: './n000200.component.html',
  styleUrls: ['./n000200.component.scss']
})
export class N000200Component {
  currentDateTime!: string;

  constructor(private datePipe: DatePipe) {
    this.changeData();
  }

  changeData(): void {
    const now = new Date();
    this.currentDateTime = this.datePipe.transform(now, 'yyyy/MM/dd HH:mm:ss')!;
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '8/1',
      '8/2',
      '8/3',
      '8/4',
      '8/5',
      '8/6',
      '8/7'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: '全通路',
        fill: 'black',
        tension: 0,
        borderColor: 'black',
        backgroundColor: '#fff'
      },
      {
        data: [ 55, 54, 72, 80, 50, 50, 35 ],
        label: '網路商店',
        tension: 0,
        borderColor: 'red',
        backgroundColor: '#fff'
      }
    ]
  };

  public CancelOrderData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '8/1',
      '8/2',
      '8/3',
      '8/4',
      '8/5',
      '8/6',
      '8/7'
    ],
    datasets: [
      {
        data: [ 5, 9, 0, 1, 6, 5, 0 ],
        label: '全通路',
        fill: 'black',
        tension: 0,
        borderColor: 'black',
        backgroundColor: '#fff'
      },
      {
        data: [ 2, 4, 0, 0, 0, 2, 0 ],
        label: '網路商店',
        tension: 0,
        borderColor: 'red',
        backgroundColor: '#fff'
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;


}
