import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// utils
import { Error } from '../../../error.interface';
import { Definitions } from '../../../definitions.variables';
import { Manager } from '../../../manager.model';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html'
})
export class PasswordComponent implements OnInit {

  @Input()
  parent: FormGroup;

  // control
  password: AbstractControl;

  // error handling variables
  showMessages = false;
  hints: Error[];
  passwordWarnings: Error[];
  validationManger: Manager;

  ngOnInit() {

    this.password = this.parent.get('password');
    this.initErrorMessaging();

    this.password.valueChanges.subscribe(() => {
      this.updateLengthStatus();
      this.updateRequiredStatus();
      this.updateNumberStatus();
      this.updateRequirementsStatus();
    });
  }

  initErrorMessaging() {

    this.hints = [
      Definitions.length(8, 16),
      Definitions.number
    ];

    this.passwordWarnings = [
      Definitions.required,
      Definitions.requirements
    ];

    this.validationManger = new Manager(this.hints, this.passwordWarnings, this.password);
  }

  changeMessageVisibility() {
    this.showMessages = !this.showMessages;
  }

  updateLengthStatus() {
    this.validationManger.updateLengthStatus();
  }

  updateRequiredStatus() {
    this.validationManger.updateRequiredStatus();
  }

  updateNumberStatus() {
    this.validationManger.updateNumberStatus();
  }

  updateRequirementsStatus() {
    this.validationManger.updateRequirementsStatus();
  }

  get displayWarnings() {
    const hasErrors = this.validationManger.warningStatus;
    const isTouched = this.password.touched;
    return hasErrors && isTouched;
  }
}
