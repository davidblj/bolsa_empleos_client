import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

// utils
import { Error } from '../../../../../shared-d/interfaces/error.interface';
import { definitions } from '../../../../../shared-d/utils/definitions.variables';
import { Manager } from '../../../../../shared-d/classes/manager.class';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html'
})

// consider splitting this component in to 2 components:
// as stated by:  https://toddmotto.com/component-architecture-reactive-forms-angular

export class PasswordComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Output()
  update = new EventEmitter<boolean>();

  // control
  password: AbstractControl;
  passwordConfirmation = new FormControl();

  // error handling variables
  showPasswordMessages = false;
  passwordHints: Error[];
  passwordWarnings: Error[];
  passwordValidationManger: Manager;

  showCheckPasswordMessages = false;
  checkPasswordHints: Error[];
  checkPasswordWarnings: Error[];
  checkPasswordValidationManger: Manager;

  ngOnInit() {

    this.password = this.parent.get('password');

    this.initPasswordErrorMessaging();
    this.password.valueChanges.subscribe(() => {
      this.updateLengthStatus();
      this.updateRequiredStatus();
      this.updateNumberStatus();
      this.updateRequirementsStatus(this.passwordValidationManger);

      // update the password status in
      // the "check password" field
      // and the overall component status
      this.updateMatchingStatus();
      this.updateFieldStatus()
    });

    this.initCheckPasswordErrorMessaging();
    this.passwordConfirmation.valueChanges.subscribe(() => {
      this.updateConfirmationStatus();
      this.updateRequirementsStatus(this.checkPasswordValidationManger);
      this.updateMatchingStatus();

      // update the overall component status
      this.updateFieldStatus()
    });
  }

  // password field functions

  initPasswordErrorMessaging() {

    this.passwordHints = [
      definitions.length(8, 16),
      definitions.number()
    ];

    this.passwordWarnings = [
      definitions.required(),
      definitions.requirements()
    ];

    this.passwordValidationManger = new Manager(
      this.passwordHints,
      this.passwordWarnings,
      this.password);
  }

  changePasswordMessageVisibility() {
    this.showPasswordMessages = !this.showPasswordMessages;
  }

  get displayWarnings() {
    return this.passwordValidationManger.displayWarnings();
  }

  updateLengthStatus() {
    this.passwordValidationManger.updateLengthStatus();
  }

  updateRequiredStatus() {
    this.passwordValidationManger.updateRequiredStatus();
  }

  updateNumberStatus() {
    this.passwordValidationManger.updateNumberStatus();
  }

  // check password field functions

  initCheckPasswordErrorMessaging() {

    this.checkPasswordHints = [
      definitions.match(),
    ];

    this.checkPasswordWarnings = [
      definitions.required(),
      definitions.requirements()
    ];

    this.checkPasswordValidationManger = new Manager(
      this.checkPasswordHints,
      this.checkPasswordWarnings,
      this.passwordConfirmation);
  }

  changeCheckPasswordMessageVisibility() {
    this.showCheckPasswordMessages = !this.showCheckPasswordMessages;
  }

  get displayCheckPasswordWarnings() {
    return this.checkPasswordValidationManger.displayWarnings();
  }

  updateMatchingStatus() {
    if (this.passwordsAreEqual()) {
      this.checkPasswordValidationManger.setHintStatus('match', false);
    } else {
      this.checkPasswordValidationManger.setHintStatus('match', true);
    }
  }

  updateConfirmationStatus() {
    if (this.passwordConfirmation.value.length > 0) {
      this.checkPasswordValidationManger.setWarningStatus('required', false);
    } else {
      this.checkPasswordValidationManger.setWarningStatus('required', true);
    }
  }

  // general purpose functions

  updateRequirementsStatus(manager: Manager) {
    manager.updateRequirementsStatus();
  }

  passwordsAreEqual() {
    return (
      this.password.value === this.passwordConfirmation.value &&
      this.password.value.length !== 0);
  }

  updateFieldStatus() {
    const passwordsAreEqual = this.passwordsAreEqual();
    const hasErrors = this.passwordValidationManger.displayWarnings();
    const componentIsValid = !hasErrors && passwordsAreEqual;
    componentIsValid ? this.update.emit(true) : this.update.emit(false);
  }
}
