import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-return-dialog',
  templateUrl: './return-dialog.component.html',
  styleUrls: ['./return-dialog.component.css'],
})
export class ReturnDialogComponent implements OnInit {
  get title(): string {
    return this.data.title;
  }

  get tableData(): any{
    return this.data.tableData;
  }

  // routerUrl: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit(): void {}

  goBack(): void {
    // this.location.back();
    // this.router.navigate([this.routerUrl], { relativeTo: this.route , state : {tableData: this.tableData } });
  }
}
