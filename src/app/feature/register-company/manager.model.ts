import { Error } from './error.interface';
import { AbstractControl } from '@angular/forms';

export class Manager {

  hints: Error[];
  warnings: Error[];
  field: AbstractControl;

  constructor(hints: Error[], warnings: Error[], field?: AbstractControl) {
    this.warnings = warnings;
    this.hints = hints;
    this.field = field;
  }

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

  get requiredStatus(): boolean {
    return this.field.hasError('required');
  }

  updateRequiredStatus() {
    const hasErrors = this.requiredStatus;
    this.setWarningStatus('required', hasErrors);
  }

  get numberStatus(): boolean {
    return this.field.hasError('number')
  }

  updateNumberStatus() {
    const hasErrors = this.numberStatus;
    this.setHintStatus('number', hasErrors);
  }

  get warningStatus() {

    let currentStatus = false;

    // check for every hint condition
    this.hints.forEach((hint) => {
    currentStatus = (currentStatus || !hint.resolved);
    });

    // and at least for one of the warnings
    currentStatus = (currentStatus || this.requiredStatus);
    return currentStatus;
  }

  updateRequirementsStatus() {
    const hasErrors = this.warningStatus;
    this.setWarningStatus('requirements', hasErrors);
  }

  // utils
  displayWarnings() {
    const hasErrors = this.warningStatus;
    const isTouched = this.field.touched;
    return hasErrors && isTouched;
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
