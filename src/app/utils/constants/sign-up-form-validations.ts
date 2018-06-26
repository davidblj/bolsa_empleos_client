import { Validator } from '../classes/validator.class';

const required = (): Validator => new Validator(
    Validator.Identifier.required,
    'El campo es requerido',
    Validator.Type.warning,
    null);

const range = (min: number, max: number): Validator => new Validator(
    Validator.Identifier.range,
    `tiene entre los ${min} y ${max} caracteres`,
    Validator.Type.hint,
    null);

const alphanumeric = (): Validator => new Validator(
  Validator.Identifier.alphanumeric,
  'tiene al menos 1 numero',
  Validator.Type.hint,
  null);

// custom validations

const validity = (): Validator => new Validator(
  Validator.Identifier.validity,
  'Los requisitos no se cumplen',
  Validator.Type.warning,
  true);

const matchingPasswords = (): Validator => new Validator(
  Validator.Identifier.match,
  'las contrañas son iguales',
  Validator.Type.hint,
  true);

export const SignUpFormValidations = {
  required,
  validity,
  range,
  alphanumeric,
  matchingPasswords
};
