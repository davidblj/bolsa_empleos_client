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
  checkPasswordStatus: boolean;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.formConfig = new FormConfig(this.form);
  }

  private createForm() {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          CustomValidators.isInRange(3, 15)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          CustomValidators.isInRange(8, 16),
          CustomValidators.isAlphanumeric
        ]
      ]
    });
  }

  onPasswordUpdate(password) {
    this.password = password;
  }

  onStatusUpdate(status: boolean) {
    this.checkPasswordStatus = status;
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  get formStatus() {
    return (this.form.valid && this.checkPasswordStatus);
  }
}
