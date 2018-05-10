import { Component } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from '../../../core/services/auth.service';
import { UserCredentials } from '../../shared/user-credentials.model';
import { UserAuth } from '../../shared/user-auth.interface';

@Component({
  selector: 'app-log-in-form-container',
  templateUrl: './log-in-form-container.component.html',
  styleUrls: ['./log-in-form-container.component.scss']
})
export class LogInFormContainerComponent {

  message = '';
  loading = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  onSubmit(userCredentials: UserCredentials | null) {

    this.message = '';

    userCredentials ?
      this.sendAuthenticationRequest(userCredentials) :
      this.message = 'credenciales incompletas';
  }

  sendAuthenticationRequest(userCredentials: UserCredentials) {

    this.loading = true;

    this.authService.logIn(userCredentials)
      .subscribe(

        () => {
          const user: UserAuth = this.authService.getUser();
          this.routeHandler(user);
          this.loading = false;
        },
        (error: string) => {
          this.loading = false;
          this.message = error;
        })
  }

  routeHandler(user: UserAuth) {

    const
      role = user.role,
      companyUser = role === 'company',
      candidateUser = (role === 'student' || role === 'graduate');

    if (companyUser) { this.redirectTo('empresas'); }

    if (candidateUser) { this.redirectTo('candidatos'); }
  }

  redirectTo(url: string) {

    const needsRedirection = this.authService.redirectionUrl;

    needsRedirection ?
      this.router.navigate([this.authService.redirectionUrl]) :
      this.router.navigate([url]);
  }
}
