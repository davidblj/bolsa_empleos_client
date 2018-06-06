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

  initialFormState: UserDetails;
  form: UserDetails;
  shouldHideUpdateStatus = true;
  shouldButtonBeEnabled = false;

  file: File;

  name;
  buttonColor = 'dark';
  buttonShape = 'square';

  constructor() { }

  ngOnInit() {
    this.initialFormState = this.profileInformation;
    this.name = this.profileInformation.name;
  }

  onFormChangedHandler(form: UserDetails) {

    this.name = form.name;

    if (!this.formsAreEqual(form)) {
      this.shouldButtonBeEnabled = true;
      this.form = form;
    } else {
      this.shouldButtonBeEnabled = false;
    }
  }

  onUploadHandler(file: File) {
    if (file) {
      this.file = file;
      this.shouldButtonBeEnabled = true;
    }
  }

  onSubmitHandler() {
    this.fileInputComponent.resetMessaging();
    this.form.resumee = this.file ? this.file : null;
    this.onUpdateProfile.emit(this.form);
  }

  showUpdateStatus() {
    this.shouldHideUpdateStatus = false;
    setTimeout(() => {this.shouldHideUpdateStatus = true}, 4000);
  }

  private formsAreEqual(newForm: UserDetails) {
    return (
      this.initialFormState.role === newForm.role &&
      this.initialFormState.name === newForm.name &&
      this.initialFormState.contact === newForm.contact &&
      this.initialFormState.email === newForm.email);
  }
}
