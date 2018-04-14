import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// services
import { AuthService } from '../services/auth.service';
import { UserAuth } from '../../log-in/shared/user-auth.interface';

@Injectable()
export class CompanyAuthGuard implements CanActivate, CanLoad {

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

    const user: UserAuth = this.authService.getUser();

    if (user.role === 'company') {
      return true;
    }

    this.authService.redirectionUrl = redirectionUrl;
    this.router.navigate(['/ingresar']);
    return false;
  }
}
