import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// utils
import { CustomValidations } from '../../custom-validations.functions';

@Component({
  selector: 'app-register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.scss']
})
export class RegisterStepOneComponent {

  form: FormGroup;
  passwordStatus = false;

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  private createForm() {
    this.form = this.fb.group({
      logo: [
        ''
      ],
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
          CustomValidations.containNumbers
        ]
      ]
    })
  }

  onUpdatePassword(status: boolean) {
    this.passwordStatus = status;
  }

  get formStatus() {
    console.log('password status', this.passwordStatus);
    console.log('form status', this.form.valid);
    return (this.passwordStatus && this.form.valid);
  }
}
