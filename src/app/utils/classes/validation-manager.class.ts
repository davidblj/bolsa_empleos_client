import { Validator, ValidatorIdentifier, ValidatorType } from '../models/validator.interface';
import { AbstractControl } from '@angular/forms';

export class ValidationManager {

  validators: Validator[];
  private readonly _control: AbstractControl;

  constructor(validators: Validator[], control: AbstractControl) {
    this.validators = validators;
    this._control = control;
  }

  get control(): AbstractControl {
    return this._control;
  }

  get hints(): Validator[] {
    return this.typeFilter(ValidatorType.hint);
  }

  get warnings(): Validator[] {
    return this.typeFilter(ValidatorType.warning);
  }

  get fieldValidity(): boolean {

    const builtInValidatorStatus = this.control.valid;
    let customValidatorStatus = true;

    this.validators.forEach((validator) => {
      const validatorIsCustomized = 'errorStatus' in validator &&
                                     validator.identifier !== ValidatorIdentifier.validity;
      if (validatorIsCustomized) {
        customValidatorStatus = customValidatorStatus && !validator.errorStatus;
      }
    });

    return builtInValidatorStatus && customValidatorStatus;
  }

  getValidatorStatus(validator: Validator): boolean {
    const statusExists = 'errorStatus' in validator;
    if (statusExists) { return validator.errorStatus }
    return this._control.hasError(validator.identifier);
  }

  // for manual updates
  updateAsyncStatus(errorStatus: boolean) {
    this.setStatus('async', errorStatus)
  }

  // for automatic updates
  setWatchOnCustomValidators() {
    this._control.valueChanges.subscribe(() => { this.setValidityStatus(); })
  }

  // todo: unsubscribe

  private typeFilter(type: ValidatorType) {
    return this.validators.filter(validator => validator.type === type);
  }

  private setValidityStatus() {
    this.setStatus(ValidatorIdentifier.validity, !this.fieldValidity);
  }

  private setStatus(identifier: string, errorStatus: boolean) {
    const validator = this.validators.find(element => element.identifier === identifier);
    if (validator) { validator.errorStatus = errorStatus; }
  }
}
