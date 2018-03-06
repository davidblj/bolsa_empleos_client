import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../custom-validators.functions';

@Component({
  selector: 'app-register-step-two',
  templateUrl: './register-step-two.component.html'
})
export class RegisterStepTwoComponent implements OnInit {

  form: FormGroup;
  logoStatus = false;
  logo: File;

  @Output()
  submit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      company: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]
      ],
      website: [
        '',
        [
          Validators.required,
          CustomValidators.isURL
        ]
      ],
      details: [
        '',
        [
          Validators.required
        ]
      ],
      sector: [
        '',
        [
          Validators.required
        ]
      ],
      nit: [
        '',
        [
          Validators.required
        ]
      ]
    })
  }

  onUpload(file: File) {
    if (file) {
      this.logoStatus = true;
      this.logo = file;
    } else {
      this.logoStatus = false;
    }
  }

  onSubmit() {
    const fields = this.form.value;
    fields['logo'] = this.logo;
    this.submit.emit(fields);
  }

  get formStatus() {
    return (this.logoStatus && this.form.valid);
  }
}
