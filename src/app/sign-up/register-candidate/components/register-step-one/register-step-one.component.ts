import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// utils
import { CustomValidators } from '../../../../shared-d/utils/custom-validators.functions';

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

  form: FormGroup;
  password: string;
  checkPasswordStatus: boolean;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          CustomValidators.containNumbers
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
