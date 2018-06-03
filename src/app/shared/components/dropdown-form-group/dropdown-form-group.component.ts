import { Component, Input, OnInit } from '@angular/core';
import { DropDown } from '../../interfaces/drop-down.interface';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-form-group',
  templateUrl: './dropdown-form-group.component.html',
  styleUrls: ['./dropdown-form-group.component.scss']
})
export class DropdownFormGroupComponent implements OnInit {

  @Input()
  config: DropDown;

  @Input()
  control: AbstractControl;

  @Input()
  editable = false;

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
      this.disabled = !this.editable;
      this.isUntouched = this.disabled;
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
