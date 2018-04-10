import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../../shared/user-credentials.model';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-log-in-form-container',
  templateUrl: './log-in-form-container.component.html',
  styleUrls: ['./log-in-form-container.component.scss']
})
export class LogInFormContainerComponent implements OnInit {

  message = '';
  loading = false;

  constructor(private authService: AuthService) { }

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
          // re route
          this.loading = false;
        },
        (error: string) => {
          this.loading = false;
          this.message = error;
        })
  }
}
