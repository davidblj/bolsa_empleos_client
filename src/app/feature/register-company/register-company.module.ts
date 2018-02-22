import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { RegisterFormComponent } from './containers/register-form/register-form.component';
import { RegisterSidePaneComponent } from './components/register-side-pane/register-side-pane.component';
import { RegisterStepOneComponent } from './components/register-step-one/register-step-one.component';
import { UsernameComponent } from './components/register-inputs/username/username.component';
import { PasswordComponent } from './components/register-inputs/password/password.component';
import { LogoComponent } from './components/register-inputs/logo/logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RegisterCardComponent
  ],
  declarations: [
    RegisterCardComponent,
    RegisterFormComponent,
    RegisterSidePaneComponent,
    RegisterStepOneComponent,
    UsernameComponent,
    PasswordComponent,
    LogoComponent
  ]
})
export class RegisterCompanyModule { }
