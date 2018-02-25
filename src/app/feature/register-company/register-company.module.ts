import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { RegisterFormComponent } from './containers/register-form/register-form.component';
import { RegisterSidePaneComponent } from './components/register-side-pane/register-side-pane.component';
import { RegisterStepOneComponent } from './components/register-step-one/register-step-one.component';
import { UsernameComponent } from './components/register-inputs/username/username.component';
import { PasswordComponent } from './components/register-inputs/password/password.component';
import { LogoComponent } from './components/register-inputs/logo/logo.component';
import { FileUploadComponent } from './containers/file-upload/file-upload.component';
import { RegisterButtonComponent } from './components/register-button/register-button.component';
import { RegisterStepperComponent } from './components/register-stepper/register-stepper.component';
import { RegisterInfoComponent } from './components/register-info/register-info.component';
import { SharedDModule } from '../../shared-d/shared-d.module';

@NgModule({
  imports: [
    CommonModule,
    SharedDModule,
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
    LogoComponent,
    FileUploadComponent,
    RegisterButtonComponent,
    RegisterStepperComponent,
    RegisterInfoComponent
  ]
})
export class RegisterCompanyModule { }
