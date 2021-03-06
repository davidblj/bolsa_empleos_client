import { Component } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from '../../../core/services/auth.service';
import { UserCredentials } from '../../shared/user-credentials.model';
import { UserAuth } from '../../shared/user-auth.interface';
import { Roles } from '../../../shared/utils/globals.variables';

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
      companyUser = role === Roles.Company,
      candidateUser = (role === Roles.Student || role === Roles.Graduate);

    if (companyUser) { this.redirectTo('empresas/ofertas'); }

    if (candidateUser) { this.redirectTo('candidatos/ofertas'); }
  }

  redirectTo(url: string) {

    const needsRedirection = this.authService.redirectionUrl;

    needsRedirection ?
      this.router.navigate([this.authService.redirectionUrl]) :
      this.router.navigate([url]);
  }
}
