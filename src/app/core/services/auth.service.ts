import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';

// classes
import { UserCredentials } from '../../log-in/shared/user-credentials.model';
import { UserAuth } from '../../log-in/shared/user-auth.interface';
import { Service } from '../../shared/classes/service.class';
import { Router } from '@angular/router';
import { Roles } from '../../shared/utils/globals.variables';

@Injectable()
export class AuthService extends Service {

  userInfo: UserAuth;
  sessionUrl = 'session';
  redirectionUrl: string;

  constructor(private http: HttpClient,
              private router: Router) {
    super();
  }

  logIn(user: UserCredentials): Observable<any> {

    const message = 'Credenciales invalidas';

    return this.http.post(this.sessionUrl, user)
      .map((response: UserAuth) => {
        this.userInfo = response;
        this.setLocalStorage();
        return;
      })
      .pipe(catchError(this.handleError(message)));
  }

  logOut() {

    localStorage.removeItem('be-user');
    this.router.navigate(['/']);
  }

  getUser(): UserAuth | null {

    const loggedInUser = localStorage.getItem('be-user');
    return loggedInUser ? JSON.parse(loggedInUser) : null;
  }

  getRole(): Roles | null {

    const currentUser = this.getUser();
    return currentUser ? currentUser.role : null;
  }

  updateUser(name: string, role: Roles) {

    const userInfo: UserAuth = this.getUser();
    userInfo.name = name;
    userInfo.role = role;
    this.userInfo = userInfo;

    this.setLocalStorage();
  }

  private setLocalStorage() {

    localStorage.setItem('be-user', JSON.stringify(this.userInfo));
  }
}
