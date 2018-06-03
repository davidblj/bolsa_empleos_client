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

  buttonColor = 'dark';
  buttonShape = 'square';

  constructor() { }

  ngOnInit() {
  }
}
