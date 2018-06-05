import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Candidate } from '../../../../shared/interfaces/candidate.interface';
import { UserDetails } from '../../shared/user-details.interface';
import { ProfileFileInputComponent } from '../profile-file-input/profile-file-input.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  profileInformation: Candidate;

  @Input()
  loading: boolean;

  @Output()
  onUpdateProfile = new EventEmitter<UserDetails>();

  @ViewChild(ProfileFileInputComponent)
  fileInputComponent: ProfileFileInputComponent;

  form: UserDetails;

  file: File;
  fileStatus = false;

  name;
  buttonColor = 'dark';
  buttonShape = 'square';

  constructor() { }

  ngOnInit() {
    this.form = this.profileInformation;
    this.name = this.profileInformation.name;
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

    // Angular OnChangeDetection wont update the message
    // twice if its value has not changed on this component
    // (null)

    this.fileInputComponent.resetMessaging();
    this.form.resumee = this.file ? this.file : null;
    this.onUpdateProfile.emit(this.form);
  }
}
