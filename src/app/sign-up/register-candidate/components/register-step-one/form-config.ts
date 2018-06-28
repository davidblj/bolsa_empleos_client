
import { FormControl, FormGroup } from '@angular/forms';
import { Validator } from '../../../../utils/classes/validator.class';
import { SignUpFormValidations } from '../../../../utils/constants/sign-up-form-validations';
import { Input } from '../../../../utils/classes/input.class';
import { FormInput, InputGroupTextType, InputGroupType } from '../../../../utils/models/form-input.interface';

export class FormConfig  {

  readonly form: FormGroup;
  private _username: FormInput;
  private _password: FormInput;
  private _confirmPassword: FormInput;

  constructor(form: FormGroup) {
    this.form = form;
    this.createUsernameInput();
    this.createPasswordInput();
    this.createConfirmPasswordInput();
  }

  createUsernameInput() {

    const validators: Validator[] = [
      SignUpFormValidations.required(),
      SignUpFormValidations.validity(),
      SignUpFormValidations.range(3, 15)];
    const control = this.form.controls['username'];
    const input = new Input(validators, control);

    this._username = {
      input,
      name: 'Nombre de usuario',
      inputType: InputGroupType.default,
      placeholder: ''
    }
  }

  createPasswordInput() {

    const validators: Validator[] = [
      SignUpFormValidations.required(),
      SignUpFormValidations.validity(),
      SignUpFormValidations.alphanumeric(),
      SignUpFormValidations.range(8, 16)];
    const control = this.form.controls['password'];
    const input = new Input(validators, control);

    this._password = {
      input,
      name: 'Contraseña',
      inputType: InputGroupType.default,
      placeholder: '',
      texType: InputGroupTextType.password
    }

  }

  createConfirmPasswordInput() {

    const validators: Validator[] = [
      SignUpFormValidations.required(),
      SignUpFormValidations.validity(),
      SignUpFormValidations.matchingPasswords()];
    const control = this.form.controls['confirm'];
    const input = new Input(validators, control);

    this._confirmPassword = {
      input,
      name: 'Confirma tu contraseña',
      inputType: InputGroupType.default,
      placeholder: '',
      texType: InputGroupTextType.password
    }

  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  get confirmPassword() {
    return this._confirmPassword;
  }
}
