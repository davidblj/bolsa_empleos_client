import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { DropDown } from '../../shared/drop-down.interface';

@Component({
  selector: 'app-job-offer-drop-down-input',
  templateUrl: './job-offer-drop-down-input.component.html',
  styleUrls: ['./job-offer-drop-down-input.component.scss']
})
export class JobOfferDropDownInputComponent {

  @Input()
  config: DropDown;

  @Input()
  control: AbstractControl;

  onOptionSelect(option: string) {
    this.config.placeHolder = option;
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
