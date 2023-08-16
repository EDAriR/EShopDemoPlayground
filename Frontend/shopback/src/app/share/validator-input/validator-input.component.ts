import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validator-input',
  templateUrl: './validator-input.component.html',
  styleUrls: ['./validator-input.component.css']
})
export class ValidatorInputComponent implements OnInit {
  @Input()
  control!: FormControl;
  @Input()
  labelName!: string;
  @Input() showHint?: boolean = true;
  @Input() maxLength?: string|boolean ='20'

  constructor() {
  }

  ngOnInit(): void {
  }

}
