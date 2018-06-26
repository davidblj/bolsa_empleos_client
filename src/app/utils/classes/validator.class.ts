import { AbstractControl } from '@angular/forms';

enum Type {
  hint = 'hint',
  warning = 'warning'
}

enum Identifier {
  required = 'required',
  validity = 'validity',
  range = 'range',
  alphanumeric = 'alphanumeric',
  match = 'match',
  async = 'async'
}

export class Validator {

  static readonly Identifier = Identifier;
  static readonly Type = Type;

  readonly identifier: Identifier;
  readonly message: string;
  readonly type: Type;
  private _customErrorStatus: boolean;

  constructor(identifier: Identifier, message: string, type: Type, customErrorStatus: boolean) {
    this.identifier = identifier;
    this.message = message;
    this._customErrorStatus = customErrorStatus;
    this.type = type;
  }

  getStatus(control: AbstractControl) {
    if (this.isCustomized()) { return this._customErrorStatus; }
    return control.hasError(this.identifier);
  }

  set customErrorStatus(status: boolean) {
    if (this.isCustomized()) {
      this._customErrorStatus = status;
    } else { console.error('this validator custom error status must not be set manually, it ' +
                           'should be set automatically by an angular reactive form') }
  }

  isCumulative(): boolean {
    return this.isCustomized() && !this.isIdentityOf(Validator.Identifier.validity);
  }

  isCustomized(): boolean {
    return this._customErrorStatus !== null;
  }

  isIdentityOf(identifier: Identifier): boolean {
    return this.identifier === identifier;
  }
}
