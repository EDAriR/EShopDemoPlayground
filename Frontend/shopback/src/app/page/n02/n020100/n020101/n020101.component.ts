import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n020101',
  templateUrl: './n020101.component.html',
  styleUrls: ['./n020101.component.scss']
})
export class N020101Component {

  constructor(
    private location: Location,
  ) { }
  ngOnInit(): void { }

  goBack(): void {
    this.location.back();
  }
}
