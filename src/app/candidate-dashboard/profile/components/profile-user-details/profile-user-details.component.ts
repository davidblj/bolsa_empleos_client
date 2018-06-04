import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDown } from '../../../../shared/interfaces/drop-down.interface';
import { roleType } from './data';
import { Candidate } from '../../../../shared/interfaces/candidate.interface';
import { CustomValidators } from '../../../../sign-up/register-candidate/shared/custom-validations.functions';
import { UserDetails } from '../../shared/user-details.interface';

@Component({
  selector: 'app-profile-user-details',
  templateUrl: './profile-user-details.component.html',
  styleUrls: ['./profile-user-details.component.scss']
})
export class ProfileUserDetailsComponent implements OnInit {

  @Input()
  userDetails: Candidate;

  @Output()
  onFormChanged = new EventEmitter<UserDetails>();

  form: FormGroup;
  roleType: DropDown;
  roleTypeEditStatus = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.roleType = roleType;
    this.createForm();
    this.watchFormChanges();
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

  watchFormChanges() {
   this.form.valueChanges.subscribe((form: UserDetails) => {
     this.onFormChanged.emit(form);
   })
  }
}
