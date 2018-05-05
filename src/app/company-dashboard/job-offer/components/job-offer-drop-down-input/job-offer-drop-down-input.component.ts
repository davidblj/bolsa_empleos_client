import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-job-offer-drop-down-input',
  templateUrl: './job-offer-drop-down-input.component.html',
  styleUrls: ['./job-offer-drop-down-input.component.scss']
})
export class JobOfferDropDownInputComponent {

  @Input()
  fieldName: string;

  @Input()
  control: AbstractControl;

  @Input()
  options;

  @Input()
  message: string;

  onOptionSelect(option: string) {
    this.message = option;
    this.control.setValue(option);
  }

  onHiddenHandler() {
    if (!this.control.touched) {
      this.control.markAsTouched();
    }
  }

  get isValid() {
    return (
      this.control.hasError('required') &&
      this.control.touched
    )
  }
}
