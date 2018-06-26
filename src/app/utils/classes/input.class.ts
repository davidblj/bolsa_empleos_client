import { Validator } from './validator.class';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

export class Input {

  private readonly validators: Validator[];
  private readonly _control: AbstractControl;
  private valueChanges: Subscription;

  constructor(validators: Validator[], control: AbstractControl) {
    this.validators = validators;
    this._control = control;
  }

  get control(): AbstractControl {
    return this._control;
  }

  get hints(): Validator[] {
    return this.typeFilter(Validator.Type.hint);
  }

  get warnings(): Validator[] {
    return this.typeFilter(Validator.Type.warning);
  }

  isValid(): boolean {

    const builtInValidatorsStatus = this.control.valid;

    let customValidatorsStatus = true;
    this.validators.forEach((validator) => {
      if (validator.isCumulative()) {
        customValidatorsStatus = customValidatorsStatus && !validator.getStatus(this.control);
      }
    });

    return builtInValidatorsStatus && customValidatorsStatus;
  }

  // custom validators management

  setWatchOnCustomValidators() {
    this.valueChanges = this._control.valueChanges.subscribe((inputValue) => { this.updateValidityValidator(); })
  }

  updateAsyncValidator(customErrorStatus: boolean) {
    this.setValidatorStatus(Validator.Identifier.async, customErrorStatus)
  }

  updateMatchingPasswordsValidator(originalPassword: string) {
    const passwordsAreEqual = originalPassword === this.control.value;
    this.setValidatorStatus(Validator.Identifier.match, !passwordsAreEqual);
  }

  unsubscribe() {
    if (this.valueChanges) { this.valueChanges.unsubscribe(); }
  }

  // utils

  private updateValidityValidator() {
    this.setValidatorStatus(Validator.Identifier.validity, !this.isValid());
  }

  private typeFilter(type: string) {
    return this.validators.filter(validator => validator.type === type);
  }

  private setValidatorStatus(identifier: string, customErrorStatus: boolean) {
    const selectedValidator = this.validators.find(validator => validator.identifier === identifier);
    selectedValidator.customErrorStatus = customErrorStatus;
  }
}
