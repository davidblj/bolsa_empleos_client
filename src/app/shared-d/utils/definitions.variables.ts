import { Error } from '../interfaces/error.interface';

const required = (): Error  =>
  ({
    key: 'required',
    message: 'El campo es requerido.',
    resolved: false
  });

const requirements = (): Error =>
  ({
    key: 'requirements',
    message: 'Los requisitos no se cumplen.',
    resolved: false
  });

const number = (): Error =>
  ({
    key: 'number',
    message: 'tiene al menos 1 numero',
    resolved: false
  });

const match = (): Error =>
  ({ key: 'match',
    message: 'las contrañas son iguales',
    resolved: false
  });

const website = (): Error =>
  ({ key: 'website',
    message: 'es un sitio web',
    resolved: false
  });

const email = (): Error =>
  ({
    key: 'email',
    message: 'es un correo',
    resolved: false
  });

const username = (): Error =>
  ({
    key: 'async-username',
    message: 'el usuario es unico',
    resolved: false
  });

const length = (min: number, max: number): Error => {
  return ({
    key: 'length',
    message: `tiene entre los ${min} y ${max} caracteres`,
    resolved: false
  })
};

export const definitions = {
  required,
  requirements,
  number,
  match,
  website,
  email,
  username,
  length
};
