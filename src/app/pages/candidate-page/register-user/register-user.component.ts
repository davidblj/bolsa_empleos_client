import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup;
  formData: Object;
  skills = [];

  maximun = [
    'Javascript', 'Typescript', 'Java', 'Python', '.Net', 'C / C++', 'Haskell', 'PHP', 'HTML/CSS', 'Android', 'SQL / MySQL',
    'NoSql / MongoDB', 'R+', 'Scala', 'NodeJS', 'Laravel'
  ];

  formErrors = {
    email: '',
    password: '',
    username: '',
    jobTitle: '',
    location: '',
    applicantName: '',
    id: '',
    age: '',
    cellphone: ''
  };

  validationMessages = {
    email: {
      required: 'This field is required'
    },
    password: {
      required: 'This field is required'
    },
    username: {
      required: 'This field is required'
    },
    jobTitle: {
      required: 'This field is required'
    },
    location: {
      required: 'This field is required'
    },
    applicantName: {
      required: 'This field is required'
    },
    id: {
      required: 'This field is required'
    },
    age: {
      required: 'This field is required'
    },
    cellphone: {
      required: 'This field is required'
    }
  };

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required],
      jobTitle: ['', Validators.required],
      location: ['', Validators.required],
      applicantName: ['', Validators.required],
      id: ['', Validators.required],
      age: ['', Validators.required],
      cellphone: ['', Validators.required]
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  private onValueChanged(data?: any) {

    if (!this.registerForm) {
      return
    }

    const form = this.registerForm;

    // todo: send a request to check for a unique: email, username, ...

    for (const field of Object.keys(this.formErrors)) {

      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {

        const messages = this.validationMessages[field];

        for (const key of Object.keys(control.errors)) {

          this.formErrors[field] = messages[key];
          console.log(key);
          console.log(field);
        }
      }
    }
  }

  ngOnInit() {
  }

  onSkillSelected(languageSelected: string) {

    let exists = false;
    let i = 0;
    this.skills.forEach(function (language, index) {

      if (languageSelected === language ) {
        exists = true;
        i = index;
      }
    });

    if (!exists) {
      this.skills.push(languageSelected);
    } else {
      this.skills.splice(i, 1);
    }
  }

  toggleStyle(language: string) {

    return this.skills.some((value) => {
      return value === language;
    });
  }

  onSubmit() {
    this.formData = this.registerForm.value;
    this.formData['skills'] = this.skills;
    console.log(this.formData);
  }
}
