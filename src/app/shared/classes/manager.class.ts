import { Error } from '../interfaces/error.interface';
import { AbstractControl } from '@angular/forms';
import { definitions } from '../utils/definitions.variables';

export class Manager {

  hints: Error[];
  warnings: Error[];
  field: AbstractControl;

  constructor(hints: Error[], warnings: Error[] , field?: AbstractControl) {

    this.hints = hints;
    this.field = field;

    // if this field have hints, do add automatically
    // a requirement warning
    if (this.hints.length > 0) {
      warnings.push(definitions.requirements());
    }

    this.warnings = warnings;
  }

  // length error update

  get lengthStatus(): boolean {
    return (
      this.field.hasError('minlength') ||
      this.field.hasError('maxlength') ||
      this.field.value.length === 0);
  }

  updateLengthStatus() {
    const hasErrors = this.lengthStatus;
    this.setHintStatus('length', hasErrors);
  }

  // required error update

  get requiredStatus(): boolean {
    return (
      this.field.hasError('required') ||
      this.field.value.length === 0);
  }

  updateRequiredStatus() {
    const hasErrors = this.requiredStatus;
    this.setWarningStatus('required', hasErrors);
  }

  // numeric error update

  get numberStatus(): boolean {
    return this.field.hasError('number');
  }

  updateNumberStatus() {
    const hasErrors = this.numberStatus;
    this.setHintStatus('number', hasErrors);
  }

  // numeric error update

  get numericStatus(): boolean {
    return this.field.hasError('numeric');
  }

  updateNumericStatus() {
    const hasErrors = this.numericStatus;
    this.setHintStatus('numeric', hasErrors)
  }

  // requirements error update

  get warningStatus() {

    let currentStatus = false;

    // check for every hint condition
    this.hints.forEach((hint) => {
    currentStatus = (currentStatus || !hint.resolved);
    });

    // and the required status
    currentStatus = (currentStatus || this.requiredStatus);
    return currentStatus;
  }

  updateRequirementsStatus() {
    const hasErrors = this.warningStatus;
    this.setWarningStatus('requirements', hasErrors);
  }

  // website error update

  get webSiteStatus() {
    return (
      this.field.hasError('website') ||
      this.field.value.length === 0);
  }

  updateWebSiteStatus() {
    const hasErrors = this.webSiteStatus;
    this.setHintStatus('website', hasErrors);
  }

  // email error update

  get emailStatus() {
    return (
      this.field.hasError('email') ||
      this.field.value.length === 0);
  }

  updateEmailStatus() {
    const hasErrors = this.emailStatus;
    this.setHintStatus('email', hasErrors);
  }


  // utilities for manual updates

  // match error update

  updateMatchingStatus(originalPassword) {
    const hasErrors = (this.field.value !== originalPassword);
    this.setHintStatus('match', hasErrors);
  }

  // async error update

  updateAsyncStatus(error: boolean) {
    this.setHintStatus('async', error);
    this.updateRequirementsStatus()
  }

  // utils

  displayWarnings() {
    const hasErrors = this.warningStatus;
    const isTouched = this.field.touched;
    return hasErrors && isTouched;
  }

  updateIndependentFields() {
    this.findAndExec(this.hints);
    this.findAndExec(this.warnings);
  }

  // shorthand to run almost every validation. That is,
  // the fields that only need the current input value to
  // update their states
  findAndExec(array) {
    array.forEach( (error: Error) => {

      switch (error.key) {
        case 'required':
          this.updateRequiredStatus();
          break;
        case 'requirements':
          this.updateRequirementsStatus();
          break;
        case 'number':
          this.updateNumberStatus();
          break;
        case 'numeric':
          this.updateNumericStatus();
          break;
        case 'website':
          this.updateWebSiteStatus();
          break;
        case 'email':
          this.updateEmailStatus();
          break;
        case 'length':
          this.updateLengthStatus();
          break;
      }
    });
  }

  setHintStatus(key: string, hasErrors: boolean) {
    const selectedHint = this.hints.find(hint => hint.key === key);
    hasErrors ? selectedHint.resolved = false : selectedHint.resolved = true;
  }

  setWarningStatus(key: string, hasErrors: boolean) {
    const selectedWarning = this.warnings.find(warning => warning.key === key);
    hasErrors ? selectedWarning.resolved = false : selectedWarning.resolved = true;
  }
}
