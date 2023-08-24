import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-n0203dialog',
  templateUrl: './n0203dialog.component.html',
  styleUrls: ['./n0203dialog.component.scss']
})
export class N0203dialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
