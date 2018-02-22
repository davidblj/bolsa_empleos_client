import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Data} from './data';
import { ResponseMessage } from '../../../shared/ResponseMessage';
import { RegisterService} from '../../../services/organizacion/register.service';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerData: Data;
  message: ResponseMessage;
  errmess: string;
  regex  = '^[a-zA-Z0-9]*$';
  selectedRole = 'Role';

  formErrors = {
    companyName: '',
    password: '',
    companyDetails: '',
    website: '',
    name: '',
    lastName: '',
    contact: '',
    nit: '',
    employmentSector: '',
  };

  validationMessages = {
    companyName: {
      required: 'This field is required',
      minlength: 'Username must be at least 4 characters long',
      maxlength: 'Username cannot be larger than 15 characters',
      pattern: 'Non alphanumeric values are not allowed'
    },
    password: {
      required: 'This field is required',
      minlength: 'This field must be at least 4 characters long',
      maxlength: 'This field cannot be more than 15 characters long',
      pattern: 'Non alphanumeric values are not allowed'
    },
    companyDetails: {
      required: 'This field is required'
    },
    // todo: add a regex for this field
    website: {
      required: 'This field is required'
    },
    name: {
      required: 'This field is required'
    },
    lastName: {
      required: 'This field is required'
    },
    contact: {
      required: 'This field is required'
    },
    // todo: add a regex for this field
    nit: {
      required: 'This field is required'
    },
    employmentSector: {
      required: 'This field is required'
    }
  };

  public city = '';

  public userSettings: any = {
    showSearchButton: false,
    showCurrentLocation: false,
    locationIconUrl: 'http://www.myiconfinder.com/uploads/iconsets/369f997cef4f440c5394ed2ae6f8eecd.png',
    geoTypes: ['(cities)']
  };

  constructor(private formBuilder: FormBuilder,
              private registerService: RegisterService,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {

    this.registerForm = this.formBuilder.group({

      companyName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(this.regex)]],
      password: ['', [Validators.required,  Validators.minLength(3), Validators.maxLength(15), Validators.pattern(this.regex)]],
      companyDetails: ['', Validators.required],
      website: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      contact: ['', Validators.required],
      workingRole: '',
      nit: ['', Validators.required],
      employmentSector: ['', Validators.required],
    });

    this.registerForm.valueChanges
      .subscribe( data => this.onValueChanged(data));

      this.onValueChanged();    // reset form validation messages.
  }

  onSubmit() {
    this.registerData = this.registerForm.value;
    this.registerData.city = this.city;
    console.log(this.registerData);

    this.message = null;
    this.errmess = null;

    // todo: test the response message parsing
    this.registerService.submitUser(this.registerData)
      .subscribe(
        message => {
          this.router.navigate(['/home']);
          this.message = message;
        },
        errmess => {
          this.errmess = <any>errmess;
        }
      );
  }

  private onValueChanged(data?: any) {

    if (!this.registerForm) { return }

    const form = this.registerForm;

    for (const field of Object.keys(this.formErrors)) {

      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {

        const messages = this.validationMessages[field];

        for (const key of Object.keys(control.errors)) {

          this.formErrors[field] = messages[key];
        }
      }
    }
  }

  validateEmptyFields(field: AbstractControl, errorField: string): Boolean {

    return (field.value === '' && field.touched || this.formErrors[errorField]);
  }

  // todo: save this value into the data class

  autoCompleteCallback(data: any): any {
    console.log(data);
    this.city = data.description;
  }

  updateCurrentRole(role: string) {
    this.selectedRole = role;
    this.registerForm.patchValue({
      workingRole: role
    });
  }
}
