import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';

// classes
import { UserCredentials } from '../../log-in/shared/user-credentials.model';
import { UserAuth } from '../../log-in/shared/user-auth.model';
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
      .map((response: any) => {
        this.handleAuthentication(response);
        return;
      })
      .pipe(catchError(this.handleError(message)));
  }

  logOut() {

    localStorage.removeItem('be-user');
  }

  getUser(): UserAuth {

    const user = JSON.parse(localStorage.getItem('be-user'));
    return new UserAuth(user);
  }

  private handleAuthentication(userInfo: any) {

    localStorage.setItem('be-user', JSON.stringify(userInfo));
  }
}
