import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';

// classes
import { UserCredentials } from '../../log-in/shared/user-credentials.model';
import { UserAuth } from '../../log-in/shared/user-auth.interface';
import { Service } from '../../shared/classes/service.class';

@Injectable()
export class AuthService extends Service {

  sessionUrl = 'session';
  redirectionUrl: string;

  constructor(private http: HttpClient) {
    super();
  }

  authenticate(user: UserCredentials): Observable<any> {

    const message = 'Credenciales invalidas';

    return this.http.post(this.sessionUrl, user)
      .map((response: UserAuth) => {
        this.handleAuthentication(response);
        return;
      })
      .pipe(catchError(this.handleError(message)));
  }

  logOut() {

    localStorage.removeItem('be-user');
  }

  getUser(): UserAuth {

    return JSON.parse(localStorage.getItem('be-user'));
  }

  private handleAuthentication(userInfo: UserAuth) {

    localStorage.setItem('be-user', JSON.stringify(userInfo));
  }
}
