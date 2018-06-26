import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormInput } from '../../../utils/models/form-input.interface';

@Component({
  selector: 'app-form-input-group',
  templateUrl: './form-input-group.component.html',
  styleUrls: ['./form-input-group.component.scss']
})
export class FormInputGroupComponent implements OnInit, OnDestroy {

  @Input()
  inputGroup: FormInput;

  fieldFocus = false;
  _inputGroup: FormInput;

  ngOnInit() {

    this.input.setWatchOnCustomValidators();

    // angular onChangeDetection quirk
    this._inputGroup = this.inputGroup;
  }

  isType(type: string): boolean {
    return type === this.inputGroup.inputType;
  }

  toggleFocus() {
    this.fieldFocus = !this.fieldFocus;
  }

  get control() {
    return this.input.control;
  }

  get input() {
    return this.inputGroup.input;
  }

  get warningStatus(): boolean {
    return !this.input.isValid() && this.control.touched;
  }

  ngOnDestroy(): void {
    this.input.unsubscribe();
  }
}
