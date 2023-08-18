import { Component, Inject, OnInit, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.css'],
})
export class ReviewDialogComponent implements OnInit {
  get title(): string {
    return this.data.title;
  }
  get url(): string {
    return this.data.url;
  }
  get tableData(): any {
    return this.data.tableData;
  }
  onSave = new EventEmitter();
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit(): void {}
  openDialog(): any {
    this.onSave.emit();
  }
}
