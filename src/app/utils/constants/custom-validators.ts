import { FormControl } from '@angular/forms';
import * as validator from 'validator';

const isAlphanumeric = (control: FormControl): { [s: string]: boolean } => {
  if (!control.value.match(/\d/)) {
    return {alphanumeric: true}
  }
};

const isNumeric = (control: FormControl): { [s: string]: boolean } => {
  if (!validator.isNumeric(control.value)) {
    return {numeric: true}
  }
};

const isEmail = (control: FormControl): { [s: string]: boolean }  => {
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

const isInRange = (min: number, max: number) => {
  return (control: FormControl):  { [s: string]: boolean } => {
    if ( !(control.value.length >= min && control.value.length <= max) ) {
      return {range: true}
    }
  }
};

export const CustomValidators = {
  isAlphanumeric,
  isNumeric,
  isEmail,
  isURL,
  isDate,
  isInRange
};
