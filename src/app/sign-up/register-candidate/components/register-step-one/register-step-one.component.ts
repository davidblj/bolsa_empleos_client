import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../../utils/constants/custom-validators';
import { FormConfig } from './form-config';

@Component({
  selector: 'app-register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.scss']
})
export class RegisterStepOneComponent {

  @Output()
  submit = new EventEmitter<any>();

  hint = 'Ingresa la información general de tu sesión';
  button = 'SIGUIENTE';

  formConfig: FormConfig;
  form: FormGroup;

  password: string;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.setWatchOnMatchingPasswordsValidator();
    this.formConfig = new FormConfig(this.form);
  }

  private createForm() {

    this.form = this.fb.group({
      username: [ '', [
          Validators.required,
          CustomValidators.isInRange(3, 15)
      ]],
      password: [ '', [
          Validators.required,
          CustomValidators.isInRange(8, 16),
          CustomValidators.isAlphanumeric
      ]],
      confirm: [ '', [
          Validators.required,
      ]]
    });
  }

  private setWatchOnMatchingPasswordsValidator() {
    this.watchPasswordInput();
    this.watchConfirmInput();
  }

  private watchPasswordInput() {
    this.form.controls['password'].valueChanges.subscribe(
      (password) => {
        this.password = password;
        const confirmPassword = this.formConfig.confirmPassword;
        confirmPassword.input.updateMatchingPasswordsValidator(this.password);
      });
  }

  private watchConfirmInput() {
    this.form.controls['confirm'].valueChanges.subscribe(() => {
      const confirmPassword = this.formConfig.confirmPassword;
      confirmPassword.input.updateMatchingPasswordsValidator(this.password);
    })
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  // unsubscribe

  get formStatus() {
    return (this.form.valid);
  }
}
