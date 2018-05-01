import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-offer-drop-down-input',
  templateUrl: './job-offer-drop-down-input.component.html',
  styleUrls: ['./job-offer-drop-down-input.component.scss']
})
export class JobOfferDropDownInputComponent {

  dropDownStatus = false;

  @Input()
  fieldName: string;

  @Input()
  options;

  @Input()
  message: string;

  toggleDropDown() {
    this.dropDownStatus = !this.dropDownStatus;
  }

  onOptionSelect(option: string) {
    this.message = option;
  }
}
