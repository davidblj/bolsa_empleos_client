import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule } from '@angular/common/http';

// services
import { AuthService } from './services/auth.service';

// providers/guards
import { interceptorProviders } from '../shared/interceptors/interceptor-providers';
import { CompanyAuthGuard } from './guards/company-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  providers: [
    AuthService,
    CompanyAuthGuard,
    interceptorProviders
  ]
})
export class CoreModule { }
