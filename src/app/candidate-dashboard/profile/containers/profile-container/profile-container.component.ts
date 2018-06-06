import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidateUserService } from '../../../../core/services/candidate-user.service';
import { UserDetails } from '../../shared/user-details.interface';
import { AuthService } from '../../../../core/services/auth.service';
import { ProfileComponent } from '../../components/profile/profile.component';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent implements OnInit {

  @ViewChild(ProfileComponent)
  profileComponent: ProfileComponent;

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
        this.profileComponent.showUpdateStatus();
      },
      (error) => { console.log(error) }
    );
  }
}
