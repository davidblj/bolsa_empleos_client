import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { UserAuth } from '../../log-in/shared/user-auth.interface';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseGuard implements CanActivate, CanLoad {

  roles: string[] = [];

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const redirectionUrl = state.url;
    return this.checkLogIn(redirectionUrl);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    const redirectionUrl = `/${route.path}`;
    return this.checkLogIn(redirectionUrl);
  }

  checkLogIn(redirectionUrl: string): boolean {

    const user: UserAuth | null = this.authService.getUser();

    const roleFound = this.roles.some((role) => {
      return user.role === role;
    });

    if (user && roleFound) {
      return true;
    }

    this.authService.redirectionUrl = redirectionUrl;
    this.router.navigate(['/ingresar']);
    return false;
  }
}
