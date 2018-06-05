import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidate } from '../../../../shared/interfaces/candidate.interface';
import { UserDetails } from '../../shared/user-details.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  userDetails: Candidate;

  @Input()
  loading: boolean;

  @Output()
  onUpdateProfile = new EventEmitter<UserDetails>();

  form: UserDetails;

  file: File;
  fileStatus = false;
  fileValidationMessage;

  name;
  buttonColor = 'dark';
  buttonShape = 'square';

  constructor() { }

  ngOnInit() {
    this.name = this.userDetails.name;
  }

  onFormChangedHandler(form: UserDetails) {
    this.name = form.name;
    this.form = form;
  }

  onUploadHandler(file: File) {
    if (file) {
      this.file = file;
      this.fileStatus = true;
    } else {
      this.fileStatus = false;
    }
  }

  onSubmitHandler() {
    this.fileValidationMessage = null;
    this.form.resumee = this.file ? this.file : null;
    this.onUpdateProfile.emit(this.form);
  }
}
