import { Component, Input, OnInit } from '@angular/core';
import { Manager } from '../../../../../shared-d/classes/manager.class';
import { Error } from '../../../../../shared-d/interfaces/error.interface';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

// variables
import { definitions } from '../../../../../shared-d/utils/definitions.variables';

@Component({
  selector: 'app-check-password',
  templateUrl: './check-password.component.html'
})
export class CheckPasswordComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];
  inputType = 'password';

  fieldName = 'Confirma tu conraseña';
  checkPassword = new FormControl();
  validationManager: Manager;

  ngOnInit() {
    this.checkPassword.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    this.hints = [
      definitions.match(),
    ];

    this.warnings = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.checkPassword);
  }

  onInput(value: string) {
    this.checkPassword.setValue(value);
    this.validationManager.updateIndependentFields();
  }

  onTouch() {
    this.checkPassword.markAsTouched();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
