import { DropDown } from '../../shared/drop-down.interface';

export const jobType: DropDown = {
  field: 'Modalidad de la oferta',
  placeHolder: 'tipo',
  options: [
    'Tiempo Completo',
    'Tiempo Medio',
    'Contrato',
    'Temporal'
  ]
};

export const jobAudience: DropDown = {
  field: 'Hacia quien esta dirigida la oferta',
  placeHolder: 'audiencia',
  options: [
    'Egresado',
    'Practicante',
    'Ambos'
  ]
};
