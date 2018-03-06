import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedDModule } from '../../shared-d/shared-d.module';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { RegisterFormComponent } from './containers/register-form/register-form.component';
import { RegisterSidePaneComponent } from './components/register-side-pane/register-side-pane.component';
import { RegisterStepOneComponent } from './components/register-step-one/register-step-one.component';
import { UsernameComponent } from './components/register-inputs/username/username.component';
import { PasswordComponent } from './components/register-inputs/password/password.component';
import { LogoComponent } from './components/register-inputs/logo/logo.component';
import { RegisterButtonComponent } from './components/register-button/register-button.component';
import { RegisterStepperComponent } from './components/register-stepper/register-stepper.component';
import { RegisterInfoComponent } from './components/register-info/register-info.component';
import { WarningComponent } from './components/warning/warning.component';
import { HintComponent } from './components/hint/hint.component';
import { RegisterStepTwoComponent } from './components/register-step-two/register-step-two.component';
import { InputComponent } from './components/input/input.component';
import { CompanyComponent } from './components/register-inputs/company/company.component';
import { NitComponent } from './components/register-inputs/nit/nit.component';
import { WebpageComponent } from './components/register-inputs/webpage/webpage.component';
import { DetailsComponent } from './components/register-inputs/details/details.component';
import { SectorComponent } from './components/register-inputs/sector/sector.component';

@NgModule({
  imports: [
    CommonModule,
    SharedDModule,
    ReactiveFormsModule
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
    RegisterButtonComponent,
    RegisterStepperComponent,
    RegisterInfoComponent,
    WarningComponent,
    HintComponent,
    RegisterStepTwoComponent,
    InputComponent,
    CompanyComponent,
    NitComponent,
    WebpageComponent,
    DetailsComponent,
    SectorComponent
  ]
})
export class RegisterCompanyModule { }
