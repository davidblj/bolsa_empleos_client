import { FormControl } from '@angular/forms';

const typeSelection = (control: FormControl): { [s: string]: boolean } => {
  if (control.value !== 'Estudiante' && control.value !== 'Egresado') {
    return {type: true}
  }
};

export const CustomValidators = {
  typeSelection
};
