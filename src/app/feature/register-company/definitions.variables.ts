import { Error } from './error.interface';

const required: Error = {key: 'required', message: 'el campo es requerido', resolved: false };
const requirements: Error = { key: 'requirements', message: 'los requisitos no se cumplen', resolved: false };

const length = (min: number, max: number): Error => {
  return {key: 'length', message: `tiene que estar entre los ${min} y ${max} caracteres`, resolved: false}
};

export const definitions = {
  required,
  length,
  requirements
};
