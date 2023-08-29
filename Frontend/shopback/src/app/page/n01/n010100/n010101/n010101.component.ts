import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Const } from 'src/app/core/services/const';
import { ReturnDialogComponent } from 'src/app/share/dialog/return-dialog/return-dialog.component';
import { ReviewDialogComponent } from 'src/app/share/dialog/review-dialog/review-dialog.component';

export interface PeriodicElement {
  price: string;
  position: number;
  quantity: number;
  warehouse: string;
  revise: string;
  subtotal: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: '小北棲', price: '1,200', quantity: 1, subtotal: '1,200', warehouse: 'H', revise: 'Y' },
  { position: 2, name: '小北棲', price: '888', quantity: 4, subtotal: '3,552', warehouse: 'He', revise: 'Y' },
  { position: 3, name: '小北棲', price: '999', quantity: 6, subtotal: '5,994', warehouse: 'Li', revise: 'Y' },
];

@Component({
  selector: 'app-n010101',
  templateUrl: './n010101.component.html',
  styleUrls: ['./n010101.component.scss'],
})
export class N010101Component implements OnInit {
  const = Const;


  displayedColumns: string[] = ['position', 'name', 'price', 'quantity', 'subtotal', 'warehouse', 'revise'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog,
    private location: Location,
  ) { }
  ngOnInit(): void { }

  goBack(): void {
    this.location.back();
  }

  openDialog(): any {
    const dialogRef = this.dialog.open(ReviewDialogComponent, {
      hasBackdrop: false,
      data: {
        title: Const.sendNotification,
      },
    });
    dialogRef.componentInstance.onSave.subscribe(() => {
      this.dialog.open(ReturnDialogComponent, {
        data: {
          title: Const.sendNotification,
        },
      });
    });
  }
}
