import { SubmitStatus } from '../../../shared/submit-status.interface';

export const success: SubmitStatus = {
  status: true,
  message: 'La informacion de tu cuenta se registro exitosamente',
  footer: {
    url: '/ingresar',
    title: 'Ingresar'
  },
};

export const failure: SubmitStatus = {
  status: false,
  message: 'Algo terriblemente mal ha sucesido. Intentemoslo de nuevo',
  footer: {
    url: '/registro/candidatos',
    title: 'Intentar'
  },
};
