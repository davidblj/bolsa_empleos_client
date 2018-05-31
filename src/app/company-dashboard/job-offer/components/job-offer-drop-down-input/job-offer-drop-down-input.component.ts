import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { DropDown } from '../../shared/drop-down.interface';

@Component({
  selector: 'app-job-offer-drop-down-input',
  templateUrl: './job-offer-drop-down-input.component.html',
  styleUrls: ['./job-offer-drop-down-input.component.scss']
})
export class JobOfferDropDownInputComponent implements OnInit {

  @Input()
  config: DropDown;

  @Input()
  control: AbstractControl;

  placeholder;
  disabled = false;
  isUntouched = true;

  ngOnInit() {
    this.onResetHandler();
    this.onEditHandler();
  }

  onOptionSelect(option: string) {
    this.placeholder = option;
    this.isUntouched = false;
    this.control.setValue(option);
  }

  onEditHandler() {
    if (this.control.value !== '') {
      this.placeholder = this.control.value;
      this.disabled = true;
    }
  }

  onResetHandler() {
    this.placeholder = this.config.placeHolder;
    this.control.valueChanges.subscribe(value => {
      if (!value) {
        this.isUntouched = true;
        this.placeholder = this.config.placeHolder;
      }
    })
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
