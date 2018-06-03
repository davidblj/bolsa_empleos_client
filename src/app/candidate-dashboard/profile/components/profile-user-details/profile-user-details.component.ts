import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDown } from '../../../../shared/interfaces/drop-down.interface';
import { roleType } from './data';
import { Candidate } from '../../../../shared/interfaces/candidate.interface';
import { CustomValidators } from '../../../../sign-up/register-candidate/shared/custom-validations.functions';

@Component({
  selector: 'app-profile-user-details',
  templateUrl: './profile-user-details.component.html',
  styleUrls: ['./profile-user-details.component.scss']
})
export class ProfileUserDetailsComponent implements OnInit {

  @Input()
  userDetails: Candidate;

  form: FormGroup;
  roleType: DropDown;
  roleTypeEditStatus = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.roleType = roleType;
    this.createForm();
  }

  createForm() {

    this.form = this.fb.group({
      name: [
        this.userDetails.name,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      email: [
        this.userDetails.email,
        [
          Validators.required,
          Validators.email
        ]
      ],
      contact: [
        this.userDetails.contact,
        Validators.required
      ],
      role: [
        this.userDetails.role,
        CustomValidators.typeSelection
      ]
    });

  }
}
