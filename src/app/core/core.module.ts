import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule } from '@angular/common/http';

// services
import { AuthService } from './services/auth.service';
import { CandidateUserService } from './services/candidate-user.service';
import { CompanyUserService } from './services/company-user.service';

// providers/guards
import { interceptorProviders } from './interceptors/interceptor-providers';
import { CompanyAuthGuard } from './guards/company-auth-guard.service';
import { CandidateAuthGuard } from './guards/candidate-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  providers: [
    AuthService,
    CandidateUserService,
    CompanyUserService,
    CompanyAuthGuard,
    CandidateAuthGuard,
    interceptorProviders
  ]
})
export class CoreModule { }
