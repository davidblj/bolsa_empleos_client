import { Validator, ValidatorIdentifier, ValidatorType } from '../models/validator.interface';

const required = (): Validator => ({
  identifier: ValidatorIdentifier.required,
  message: 'El campo es requerido',
  type: ValidatorType.warning
});

const validity = (): Validator => ({
  identifier: ValidatorIdentifier.validity,
  message: 'Los requisitos no se cumplen',
  errorStatus: true,
  type: ValidatorType.warning
});

const range = (min: number, max: number): Validator => ({
  identifier: ValidatorIdentifier.range,
  message: `tiene entre los ${min} y ${max} caracteres`,
  type: ValidatorType.hint
});

export const SignUpFormValidations = {
  required,
  validity,
  range
};
