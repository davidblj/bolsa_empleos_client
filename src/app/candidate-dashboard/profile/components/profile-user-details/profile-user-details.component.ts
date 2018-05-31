import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDown } from '../../../../shared/interfaces/drop-down.interface';
import { roleType } from './data';

@Component({
  selector: 'app-profile-user-details',
  templateUrl: './profile-user-details.component.html',
  styleUrls: ['./profile-user-details.component.scss']
})
export class ProfileUserDetailsComponent implements OnInit {

  form: FormGroup;
  roleType: DropDown;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.roleType = roleType;
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: [
        ''
      ],
      email: [
        '',
        Validators.email
      ],
      contact: [
        ''
      ],
      role: [
        ''
      ]
    })
  }
}
