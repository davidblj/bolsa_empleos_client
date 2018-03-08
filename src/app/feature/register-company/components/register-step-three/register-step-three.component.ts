import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../shared/custom-validators.functions';

@Component({
  selector: 'app-register-step-three',
  templateUrl: './register-step-three.component.html'
})
export class RegisterStepThreeComponent {

  form: FormGroup;

  @Output()
  submit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  createForm() {
    this.form = this.fb.group({
      admin: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          CustomValidators.isAnEmail
        ]
      ],
      contact: [
        '',
        [
          Validators.required
        ]
      ]
    })
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  get formStatus() {
    return this.form.valid;
  }
}
