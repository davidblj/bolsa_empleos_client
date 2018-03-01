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

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  private createForm() {
    this.form = this.fb.group({
      logo: [
        '',
        Validators.required
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
}
