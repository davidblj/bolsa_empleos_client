import { Component, OnInit } from '@angular/core';
import { CandidateUserService } from '../../../../core/services/candidate-user.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent implements OnInit {

  userDetails$ = this.candidateUserService.getProfile();

  constructor(private candidateUserService: CandidateUserService) { }

  ngOnInit() {
  }
}
