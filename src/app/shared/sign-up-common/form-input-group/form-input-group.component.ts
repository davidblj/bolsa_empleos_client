import { Component, Input, OnInit } from '@angular/core';
import { InputGroup } from '../../../utils/models/input-group.interface';

@Component({
  selector: 'app-form-input-group',
  templateUrl: './form-input-group.component.html',
  styleUrls: ['./form-input-group.component.scss']
})
export class FormInputGroupComponent implements OnInit {

  @Input()
  inputGroup: InputGroup;

  fieldFocus = false;

  ngOnInit() {
    this.manager.setWatchOnCustomValidators();
  }

  isType(type: string): boolean {
    return type === this.inputGroup.type;
  }

  toggleFocus() {
    this.fieldFocus = !this.fieldFocus;
  }

  get control() {
    return this.manager.control;
  }

  get manager() {
    return this.inputGroup.validationManager;
  }

  get warningStatus(): boolean {
    return !this.manager.fieldValidity && this.control.touched;
  }
}
