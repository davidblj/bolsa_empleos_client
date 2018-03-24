import { FormControl } from '@angular/forms';

const typeSelection = (control: FormControl): { [s: string]: boolean } => {
  if (control.value !== 'student' && control.value !== 'graduate') {
    return {type: true}
  }
};

export const CustomValidators = {
  typeSelection
};
