
export enum ValidatorType {
  hint = 'hint',
  warning = 'warning'
}

export enum ValidatorIdentifier {
  required = 'required',
  validity = 'validity',
  range = 'range',
  async = 'async',
}

export interface Validator {
  identifier: ValidatorIdentifier;
  message: string;
  errorStatus?: boolean;
  type?: ValidatorType;
}
