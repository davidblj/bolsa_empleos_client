import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-job-offer-date-input',
  templateUrl: './job-offer-date-input.component.html',
  styleUrls: ['./job-offer-date-input.component.scss']
})
export class JobOfferDateInputComponent implements OnInit {

  @Input()
  fieldName: string;

  @Input()
  control: AbstractControl;

  @Input()
  placeHolder = '';

  constructor() { }

  ngOnInit() {
  }

  get isValid() {
    return (
      this.control.hasError('required')) &&
      this.control.touched
  }
}
