import { Error } from './error.interface';

const required = (): Error  => ({key: 'required', message: 'el campo es requerido', resolved: false });
const requirements = (): Error => ({ key: 'requirements', message: 'los requisitos no se cumplen', resolved: false });
const number = (): Error => ({ key: 'number', message: 'tiene al menos 1 numero', resolved: false });
const match = (): Error => ({ key: 'match', message: 'las contrañas  coinciden', resolved: false });
const length = (min: number, max: number): Error => {
  return ({key: 'length', message: `tiene entre los ${min} y ${max} caracteres`, resolved: false})
};

export const Definitions = {
  required,
  requirements,
  number,
  match,
  length
};
