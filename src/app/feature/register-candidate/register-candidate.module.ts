import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterStepOneComponent } from './components/register-step-one/register-step-one.component';
import { RegisterStepTwoComponent } from './components/register-step-two/register-step-two.component';
import { RegisterStepThreeComponent } from './components/register-step-three/register-step-three.component';
import { RegisterFormComponent } from './containers/register-form/register-form.component';
import { RegisterFormSkeletonComponent } from './components/register-form-skeleton/register-form-skeleton.component';
import { RegisterStepperComponent } from './components/register-stepper/register-stepper.component';
import { UsernameComponent } from './components/register-inputs/username/username.component';
import { CheckPasswordComponent } from './components/register-inputs/check-password/check-password.component';
import { PasswordComponent } from './components/register-inputs/password/password.component';
import { SharedDModule } from '../../shared-d/shared-d.module';
import { RegisterCandidateEntryPointComponent } from './components/register-candidate-entry-point/register-candidate-entry-point.component';

@NgModule({
  imports: [
    CommonModule,
    SharedDModule
  ],
  exports: [
    RegisterCandidateEntryPointComponent
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
    RegisterCandidateEntryPointComponent
  ]
})
export class RegisterCandidateModule { }
