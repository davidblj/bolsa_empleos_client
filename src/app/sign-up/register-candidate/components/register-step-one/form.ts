
import { FormControl, FormGroup } from '@angular/forms';
import { Validator } from '../../../../utils/classes/validator.class';
import { SignUpFormValidations } from '../../../../utils/constants/sign-up-form-validations';
import { Input } from '../../../../utils/classes/input.class';
import { FormInput, InputGroupTextType, InputGroupType } from '../../../../utils/models/form-input.interface';

export class Form  {

  form: FormGroup;

  constructor(form: FormGroup) {
    this.form = form;
  }

  get username(): FormInput {

    const validators: Validator[] = [
      SignUpFormValidations.required(),
      SignUpFormValidations.validity(),
      SignUpFormValidations.range(3, 15)];
    const control = this.form.controls['username'];
    const input = new Input(validators, control);

    return {
      input,
      name: 'Nombre de usuario',
      inputType: InputGroupType.default,
      placeholder: ''
    }
  }

  get password(): FormInput {

    const validators: Validator[] = [
      SignUpFormValidations.required(),
      SignUpFormValidations.validity(),
      SignUpFormValidations.alphanumeric(),
      SignUpFormValidations.range(8, 16)];
    const control = this.form.controls['password'];
    const input = new Input(validators, control);

    return {
      input,
      name: 'Contraseña',
      inputType: InputGroupType.default,
      placeholder: '',
      texType: InputGroupTextType.password
    }
  }

  get confirmPassword(): FormInput {

    // singleton pattern ?

    const validators: Validator[] = [
      SignUpFormValidations.required(),
      SignUpFormValidations.validity(),
      SignUpFormValidations.matchingPasswords()];
    const control = new FormControl();
    const input = new Input(validators, control);

    return {
      input,
      name: 'Confirma tu contraseña',
      inputType: InputGroupType.default,
      placeholder: '',
      texType: InputGroupTextType.password
    }
  }
}
