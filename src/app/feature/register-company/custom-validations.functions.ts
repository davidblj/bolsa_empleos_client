import { FormControl } from '@angular/forms';

function containNumbers(control: FormControl): { [s: string]: boolean} {
  if (!control.value.match(/\d/)) {
    return {number: true}
  }
}

export const CustomValidations = {
  containNumbers: containNumbers
};
