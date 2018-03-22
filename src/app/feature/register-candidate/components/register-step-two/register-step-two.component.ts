import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.scss']
})
export class RegisterStepTwoComponent implements OnInit {

  title = 'Registrate';
  hint = 'Ingresa la informacio   ';

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  private createForm() {
    this.form = this.fb.group({
      type: [
        ''
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
        ]
      ],
      pid: [
        ''
      ]
    })
  }

}
