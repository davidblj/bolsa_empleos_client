import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        Validators.required
      ]
    })
  }
}
