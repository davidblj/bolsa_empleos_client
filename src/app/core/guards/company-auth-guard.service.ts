import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// services
import { AuthService } from '../services/auth.service';
import { UserAuth } from '../../log-in/shared/user-auth.interface';
import { BaseGuard } from './base-guard.class';
import { Roles } from '../../shared/utils/globals.variables';

@Injectable()
export class CompanyAuthGuard extends BaseGuard {

  constructor(authService: AuthService, router: Router) {
    super(authService, router);
    this.roles.push(Roles.Company);
  }
}
