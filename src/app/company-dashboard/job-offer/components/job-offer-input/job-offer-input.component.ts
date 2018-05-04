import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-job-offer-input',
  templateUrl: './job-offer-input.component.html',
  styleUrls: ['./job-offer-input.component.scss']
})
export class JobOfferInputComponent implements OnInit {

  @Input()
  fieldName: string;

  @Input()
  control: AbstractControl;

  @Input()
  placeHolder = '';

  @Input()
  type = 'input';

  ngOnInit() {
  }

  isType(type: string): boolean {
    return type === this.type;
  }

  get isValid() {
    return (
      this.control.hasError('required')) &&
      this.control.touched
  }
}
