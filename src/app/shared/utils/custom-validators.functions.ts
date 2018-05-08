import { FormControl } from '@angular/forms';
import * as validator from 'validator';

const containNumbers = (control: FormControl): { [s: string]: boolean } => {
  if (!control.value.match(/\d/)) {
    return {number: true}
  }
};

const isNumeric = (control: FormControl): { [s: string]: boolean } => {
  if (!validator.isNumeric(control.value)) {
    return {numeric: true}
  }
};

const isAnEmail = (control: FormControl): { [s: string]: boolean }  => {
  if (!validator.isEmail(control.value)) {
    return {email: true}
  }
};

const isURL = (control: FormControl): { [s: string]: boolean }  => {
  if (!validator.isURL(control.value)) {
    return {website: true}
  }
};

const isDate = (control: FormControl): { [s: string]: boolean } => {
  if (!validator.isISO8601(control.value)) {
    return {date: true}
  }
};

export const CustomValidators = {
  containNumbers,
  isNumeric,
  isAnEmail,
  isURL,
  isDate
};
