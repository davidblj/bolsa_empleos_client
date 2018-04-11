import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from '../../shared/auth.service';
import { UserCredentials } from '../../shared/user-credentials.model';
import { UserAuth } from '../../shared/user-auth.model';

@Component({
  selector: 'app-log-in-form-container',
  templateUrl: './log-in-form-container.component.html',
  styleUrls: ['./log-in-form-container.component.scss']
})
export class LogInFormContainerComponent implements OnInit {

  message = '';
  loading = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(userCredentials: UserCredentials | null) {

    this.message = '';

    if (!userCredentials) {

      this.message = 'credenciales incompletas';

    } else {

      this.sendAuthenticationRequest(userCredentials)
    }
  }

  sendAuthenticationRequest(userCredentials: UserCredentials) {

    this.loading = true;

    this.authService.authenticate(userCredentials)
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

    if (user.role === 'company') {

      if (!this.authService.redirectionUrl) {
        this.router.navigate(['empresas']);
      }
    }
  }
}
