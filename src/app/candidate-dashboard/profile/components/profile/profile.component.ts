import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../../../../shared/interfaces/candidate.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  userDetails: Candidate;

  fileStatus = false;
  file: File;

  name;
  buttonColor = 'dark';
  buttonShape = 'square';

  constructor() { }

  ngOnInit() {
    this.name = this.userDetails.name;
  }

  onNameChangedHandler(name: string) {
    this.name = name;
  }

  onUploadHandler(file: File) {
    if (file) {
      this.file = file;
      this.fileStatus = true;
    } else {
      this.fileStatus = false;
    }
  }
}
