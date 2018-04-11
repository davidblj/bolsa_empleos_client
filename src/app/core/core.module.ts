import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule } from '@angular/common/http';

// services
import { AuthService } from './services/auth.service';

// providers
import { interceptorProviders } from '../shared/interceptors/interceptor-providers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  providers: [
    AuthService,
    interceptorProviders
  ]
})
export class CoreModule { }
