import { Component, Input, OnInit } from '@angular/core';
import { Manager } from '../../../../../shared/classes/manager.class';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Error } from '../../../../../shared/interfaces/error.interface';
import { definitions } from '../../../../../shared/utils/definitions.variables';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Nombre completo';

  admin: AbstractControl;
  validationManager: Manager;

  ngOnInit() {
    this.admin = this.parent.get('admin');
    this.admin.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    this.hints = [
      definitions.length(3, 30)
    ];

    this.warnings = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.admin
    )
  }

  onInput(value) {
    this.admin.setValue(value);
    this.updateLengthStatus();
    this.updateRequiredStatus();
    this.updateRequirementsStatus();
  }

  onTouch() {
    this.admin.markAsTouched();
  }

  updateLengthStatus() {
    this.validationManager.updateLengthStatus();
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
