import { Component, OnInit } from '@angular/core';
import { CandidateUserService } from '../../../../core/services/candidate-user.service';
import { UserDetails } from '../../shared/user-details.interface';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent implements OnInit {

  userDetails$ = this.candidateUserService.getProfile();
  loading: boolean;

  constructor(private candidateUserService: CandidateUserService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onUpdateProfileHandler(userDetails: UserDetails) {

    this.loading = true;
    this.candidateUserService.updateProfile(userDetails).subscribe(
      () => {
        this.loading = false;
        this.authService.updateUser(userDetails.name, userDetails.role);
        console.log('update complete')
      },
      (error) => { console.log(error) }
    );
  }
}
