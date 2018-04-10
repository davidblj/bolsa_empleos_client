import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../../shared/utils/custom-validators.functions';

@Component({
  selector: 'app-register-step-three',
  templateUrl: './register-step-three.component.html',
  styleUrls: ['./register-step-three.component.scss']
})
export class RegisterStepThreeComponent implements OnInit {

  @Output()
  submit = new EventEmitter<any>();

  hint = 'Hazte a conocer ante una empresa';
  button = 'FINALIZAR';

  form: FormGroup;
  resumeeStatus = false;
  resumee: File;

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {
    this.createForm()
  }

  private createForm() {
    this.form = this.fb.group({
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

  onUpload(file: File) {
    if (file) {
      this.resumeeStatus = true;
      this.resumee = file;
    } else {
      this.resumeeStatus = false;
    }
  }

  onSubmit() {
    const fields = this.form.value;
    fields['resumee'] = this.resumee;
    this.submit.emit(this.form.value);
  }

    get formStatus() {
    return (this.resumeeStatus && this.form.valid);
  }
}
