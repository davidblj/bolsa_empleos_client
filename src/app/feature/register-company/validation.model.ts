import { Error } from './error.interface';
import { AbstractControl } from '@angular/forms';

export class ValidationManager {

  hints: Error[];
  warnings: Error[];
  field: AbstractControl;

  constructor(hints: Error[], warnings: Error[], field: AbstractControl) {
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

  get warningStatus() {

    let status = false;

    // check for every hint condition
    this.hints.forEach((hint) => {
    status = (status || !hint.resolved);
    });

    // and at least for one of the warnings
    status = (status || this.requiredStatus);
    return status;
  }

  updateRequirementsStatus() {
    const hasErrors = this.warningStatus;
    this.setWarningStatus('requirements', hasErrors);
  }

  // utils
  setHintStatus(key: string, hasErrors: boolean) {
    const selectedHint = this.hints.find(hint => hint.key === key);
    hasErrors ? selectedHint.resolved = false : selectedHint.resolved = true;
  }

  setWarningStatus(key: string, hasErrors: boolean) {
    const selectedWarning = this.warnings.find(warning => warning.key === key);
    hasErrors ? selectedWarning.resolved = false : selectedWarning.resolved = true;
  }

  /*checkPresence(key: string): boolean {
    const result = this.errors.find(error => error.key === key);
    return !!result;
  }*/
}
