import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css'],
})
export class ErrorDialogComponent implements OnInit {
  get msg(): string {
    return this.data.msg;
  }
  get result():any {
    return this.data.result
  }
  constructor(@Inject(MAT_DIALOG_DATA)
    private data: any,
    private router: Router,) {}

  ngOnInit(): void {}

  goBackLogin(){
    const errorArr:Array<string>=['9902','9904']
    if(errorArr.includes(this.result.msgCode)){
      this.router.navigate(['login']);
    }
  }
}
