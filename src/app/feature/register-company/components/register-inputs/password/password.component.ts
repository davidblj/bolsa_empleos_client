import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

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
      this.updateRequirementsStatus();
    });

    this.initCheckPasswordErrorMessaging();
    this.passwordConfirmation.valueChanges.subscribe((value) => {
      this.updateMatchingStatus(value);
      this.updateConfirmationStatus(value);
      this.updateRequirementsStatus();
      this.updateFieldStatus(value)
    });
  }

  initPasswordErrorMessaging() {

    this.passwordHints = [
      Definitions.length(8, 16),
      Definitions.number()
    ];

    this.passwordWarnings = [
      Definitions.required(),
      Definitions.requirements()
    ];

    this.passwordValidationManger = new Manager(
      this.passwordHints,
      this.passwordWarnings,
      this.password);
  }

  initCheckPasswordErrorMessaging() {

    this.checkPasswordHints = [
      Definitions.match(),
    ];

    this.checkPasswordWarnings = [
      Definitions.required(),
      Definitions.requirements()
    ];

    this.checkPasswordValidationManger = new Manager(
      this.checkPasswordHints,
      this.checkPasswordWarnings,
      this.passwordConfirmation);
  }

  changePasswordMessageVisibility() {
    this.showPasswordMessages = !this.showPasswordMessages;
  }

  changeCheckPasswordMessageVisibility() {
    this.showCheckPasswordMessages = !this.showCheckPasswordMessages;
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

  updateRequirementsStatus() {
    this.passwordValidationManger.updateRequirementsStatus();
  }

  updateMatchingStatus(password: string) {
    if (this.passwordsAreEqual(password)) {
      this.checkPasswordValidationManger.setHintStatus('match', false);
    } else {
      this.checkPasswordValidationManger.setHintStatus('match', true);
    }
  }

  updateConfirmationStatus(password: string) {
    if (password.length > 0) {
      this.checkPasswordValidationManger.setWarningStatus('required', false);
    } else {
      this.checkPasswordValidationManger.setWarningStatus('required', true);
    }
  }

  get displayWarnings() {
    return this.passwordValidationManger.displayWarnings();
  }

  get displayConfirmationWarnings() {
    return this.checkPasswordValidationManger.displayWarnings();
  }

  passwordsAreEqual(password: string) {
    return (
      this.password.value === password &&
      password.length !== 0);
  }

  updateFieldStatus(password: string) {
    const passwordsAreEqual = this.passwordsAreEqual(password);
    const hasErrors = this.passwordValidationManger.displayWarnings();
    const isValid = !hasErrors && passwordsAreEqual;
    isValid ? this.update.emit(true) : this.update.emit(false);
  }
}
