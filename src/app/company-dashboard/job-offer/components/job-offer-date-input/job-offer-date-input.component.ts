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

  minDate: Date;
  isHidden = false;

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  onDateSelected(value: Date) {
    if (value) {
      try {
        const isoString = value.toISOString();
        this.control.setValue(isoString);
      } catch (e) {
        this.control.setErrors({'date': true});
      }
    }
  }

  onHiddenHandler() {
    this.isHidden = true;
    this.control.markAsTouched();
  }

  get invalid() {
    return (
      this.isHidden &&
      this.control.hasError('required') &&
      this.control.touched
    )
  }

  get invalidDate() {
    return (
      !this.control.hasError('required') &&
      this.control.hasError('date') &&
      this.control.touched
    )
  }
}
