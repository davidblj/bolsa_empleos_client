import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './components/img/img.component';
import { PopoverComponent } from './components/popover/popover.component';
import { SignUpCardComponent } from './components/sign-up-common/sign-up-card/sign-up-card.component';
import { InputComponent } from './components/input/input.component';
import { HintComponent } from './components/sign-up-common/hint/hint.component';
import { WarningComponent } from './components/sign-up-common/warning/warning.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpButtonComponent } from './components/sign-up-common/sign-up-button/sign-up-button.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { SignUpFormGroupComponent } from './components/sign-up-common/sign-up-form-group/sign-up-form-group.component';
import { UsernameComponent } from './components/sign-up-common/sign-up-inputs/username/username.component';
import { PasswordComponent } from './components/sign-up-common/sign-up-inputs/password/password.component';
import { CheckPasswordComponent } from './components/sign-up-common/sign-up-inputs/check-password/check-password.component';
import { ButtonComponent } from './components/button/button.component';

// warningComponent, hintComponent, and registerButton component must be private members, make it do so.

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ImgComponent,
    PopoverComponent,
    SignUpCardComponent,
    InputComponent,
    HintComponent,
    WarningComponent,
    ButtonComponent,
    SignUpButtonComponent,
    SignUpFormGroupComponent,
    UsernameComponent,
    PasswordComponent,
    CheckPasswordComponent
  ],
  declarations: [
    ImgComponent,
    PopoverComponent,
    SignUpCardComponent,
    InputComponent,
    HintComponent,
    WarningComponent,
    SignUpButtonComponent,
    FileInputComponent,
    StepperComponent,
    SignUpFormGroupComponent,
    UsernameComponent,
    PasswordComponent,
    CheckPasswordComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
