import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// utils
import { CustomValidators } from '../../../../shared-d/utils/custom-validators.functions';

@Component({
  selector: 'app-register-step-one',
  templateUrl: './register-step-one.component.html'
})
export class RegisterStepOneComponent {

  form: FormGroup;
  passwordStatus = false;
  // usernameStatus = false;

  @Output()
  submit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.createForm()
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
    })
  }

  onUpdatePassword(status: boolean) {
    this.passwordStatus = status;
  }

  /*onUpdateUsername(status: boolean) {
    this.usernameStatus = status;
  }*/

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  get formStatus() {
    return (this.passwordStatus && this.form.valid);
  }
}
