import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../../../../shared/interfaces/candidate.interface';
import { UserDetails } from '../../shared/user-details.interface';
import { Form } from '../../../../shared/classes/form.class';
import { CandidateUserService } from '../../../../core/services/candidate-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  userDetails: Candidate;

  form: UserDetails;

  fileStatus = false;
  file: File;

  name;
  buttonColor = 'dark';
  buttonShape = 'square';

  constructor(private candidateUserService: CandidateUserService) { }

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
    this.form.resumee = this.file ? this.file : null;
    console.log(this.form);
    this.candidateUserService.updateProfile(this.form).subscribe(
      () => { console.log('update complete') },
      (error) => { console.log(error) }
    );
  }
}
