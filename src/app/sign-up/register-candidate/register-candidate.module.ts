import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { RegisterStepOneComponent } from './components/register-step-one/register-step-one.component';
import { RegisterStepTwoComponent } from './components/register-step-two/register-step-two.component';
import { RegisterStepThreeComponent } from './components/register-step-three/register-step-three.component';
import { RegisterFormComponent } from './containers/register-form/register-form.component';
import { RegisterFormSkeletonComponent } from './components/register-form-skeleton/register-form-skeleton.component';
import { RegisterStepperComponent } from './components/register-stepper/register-stepper.component';
import { UsernameComponent } from './components/register-inputs/username/username.component';
import { CheckPasswordComponent } from './components/register-inputs/check-password/check-password.component';
import { PasswordComponent } from './components/register-inputs/password/password.component';
import { PidComponent } from './components/register-inputs/pid/pid.component';
import { NameComponent } from './components/register-inputs/name/name.component';
import { TypeComponent } from './components/register-inputs/type/type.component';
import { EmailComponent } from './components/register-inputs/email/email.component';
import { ContactComponent } from './components/register-inputs/contact/contact.component';
import { ResumeeComponent } from './components/register-inputs/resumee/resumee.component';
import { RegisterService } from './shared/register.service';
import { RegisterCandidateRoutingModule } from './register-candidate-routing.module';
import { RegisterCandidateEntryPointComponent } from './components/register-candidate-entry-point/register-candidate-entry-point.component';


@NgModule({
  imports: [
    CommonModule,
    RegisterCandidateRoutingModule,
    SharedModule
  ],
  declarations: [
    RegisterStepOneComponent,
    RegisterStepTwoComponent,
    RegisterStepThreeComponent,
    RegisterFormComponent,
    RegisterFormSkeletonComponent,
    RegisterStepperComponent,
    UsernameComponent,
    CheckPasswordComponent,
    PasswordComponent,
    RegisterCandidateEntryPointComponent,
    PidComponent,
    NameComponent,
    TypeComponent,
    EmailComponent,
    ContactComponent,
    ResumeeComponent
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterCandidateModule { }
