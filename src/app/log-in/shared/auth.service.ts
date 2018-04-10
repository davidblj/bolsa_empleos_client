import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

// classes
import { UserCredentials } from './user-credentials.model';
import { UserAuth } from './user-auth.model';
import { Service } from '../../shared/classes/service.class';

@Injectable()
export class AuthService extends Service {

  sessionUrl = 'session';

  constructor(private http: HttpClient) {
    super();
  }

  authenticate(user: UserCredentials): Observable<any> {

    const message = 'Credenciales invalidas';

    return this.http.post(this.sessionUrl, user)
      .map((response: any) => {
        this.handleAuthentication(new UserAuth(response));
        return;
      })
      .pipe(catchError(this.handleError(message)));
  }

  logOut() {

    localStorage.removeItem('be-user');
  }

  getUser(): string {
    const userAuth: UserAuth = JSON.parse(localStorage.getItem('be-user'));
    return userAuth.user;
  }

  private handleAuthentication(userAuth: UserAuth) {

    // throw if an empty field is found
    localStorage.setItem('be-user', JSON.stringify(userAuth));
  }
}
