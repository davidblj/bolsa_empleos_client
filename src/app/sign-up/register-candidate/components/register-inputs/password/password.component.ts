import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Manager } from '../../../../../shared/classes/manager.class';
import { Error } from '../../../../../shared/interfaces/error.interface';
import { AbstractControl, FormGroup } from '@angular/forms';
import { definitions } from '../../../../../shared/utils/definitions.variables';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html'
})
export class PasswordComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Output()
  changed = new EventEmitter<string>();

  hints: Error[];
  warnings: Error[];

  fieldName = 'Contraseña';
  inputType = 'password';
  password: AbstractControl;
  validationManager: Manager;

  constructor() { }

  ngOnInit() {
    this.password = this.parent.get('password');
    this.password.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    this.hints = [
      definitions.length(8, 16),
      definitions.number()
    ];

    this.warnings = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.password);
  }

  onInput(value: string) {
    this.password.setValue(value);
    this.changed.emit(value);
    this.validationManager.updateIndependentFields();
  }

  onTouch() {
    this.password.markAsTouched();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }

}
