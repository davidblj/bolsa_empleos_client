import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseGuard } from './base-guard.class';
import { AuthService } from '../services/auth.service';
import { Roles } from '../../shared/utils/globals.variables';

@Injectable()
export class CandidateAuthGuard extends BaseGuard {

  constructor(authService: AuthService, router: Router) {
    super(authService, router);
    this.roles.push(Roles.Student);
    this.roles.push(Roles.Graduate);
  }
}
