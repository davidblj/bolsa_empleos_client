import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// functions
import { CustomValidators } from '../../shared/custom-validations.functions';
import { CustomValidators  as SharedCustomValidators } from '../../../../shared-d/utils/custom-validators.functions';

@Component({
  selector: 'app-register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.scss']
})
export class RegisterStepTwoComponent {

  @Output()
  submit = new EventEmitter<any>();

  hint = 'Identificate como un miembro de la UdeA';
  button = 'SIGUIENTE';

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  private createForm() {
    this.form = this.fb.group({
      type: [
        '',
        CustomValidators.typeSelection
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)
        ]
      ],
      pid: [
        '',
        SharedCustomValidators.isNumeric
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
