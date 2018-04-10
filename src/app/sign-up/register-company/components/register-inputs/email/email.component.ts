import { Component, Input, OnInit } from '@angular/core';
import { Manager } from '../../../../../shared/classes/manager.class';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Error } from '../../../../../shared/interfaces/error.interface';
import { definitions } from '../../../../../shared/utils/definitions.variables';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html'
})
export class EmailComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Correo electronico';

  email: AbstractControl;
  validationManager: Manager;

  ngOnInit() {
    this.email = this.parent.get('email');
    this.email.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    this.hints = [
      definitions.email()
    ];

    this.warnings = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.email
    )
  }

  onInput(value) {
    this.email.setValue(value);
    this.updateEmailStatus();
    this.updateRequiredStatus();
    this.updateRequirementsStatus();
  }

  onTouch() {
    this.email.markAsTouched();
  }

  updateEmailStatus() {
    this.validationManager.updateEmailStatus();
  }

  updateRequiredStatus() {
    this.validationManager.updateRequiredStatus();
  }

  updateRequirementsStatus() {
    this.validationManager.updateRequirementsStatus();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
