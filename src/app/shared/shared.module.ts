import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';

// components
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
import { ContactComponent } from './components/sign-up-common/sign-up-inputs/contact/contact.component';
import { EmailComponent } from './components/sign-up-common/sign-up-inputs/email/email.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HeaderProfileComponent } from './components/header-profile/header-profile.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { DropdownFormGroupComponent } from './components/dropdown-form-group/dropdown-form-group.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HeaderSessionComponent } from './components/header-session/header-session.component';
import { SignUpSubmitStatusComponent } from './components/sign-up-common/sign-up-submit-status/sign-up-submit-status.component';
import { FormInputGroupComponent } from './sign-up-common/form-input-group/form-input-group.component';
import { SignUpHintsComponent } from './sign-up-common/sign-up-hints/sign-up-hints.component';
import { SignUpWarningsComponent } from './sign-up-common/sign-up-warnings/sign-up-warnings.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDropdownModule
  ],
  exports: [
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
    CheckPasswordComponent,
    ContactComponent,
    EmailComponent,
    PaginatorComponent,
    HeaderComponent,
    NotificationComponent,
    HeaderProfileComponent,
    NavigationComponent,
    FormGroupComponent,
    DropdownFormGroupComponent,
    HeaderSessionComponent,
    SignUpSubmitStatusComponent,
    FormInputGroupComponent
  ],
  declarations: [
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
    ContactComponent,
    EmailComponent,
    CheckPasswordComponent,
    ButtonComponent,
    PaginatorComponent,
    HeaderComponent,
    NotificationComponent,
    HeaderProfileComponent,
    NavigationComponent,
    FormGroupComponent,
    DropdownFormGroupComponent,
    HeaderSessionComponent,
    SignUpSubmitStatusComponent,
    FormInputGroupComponent,
    SignUpHintsComponent,
    SignUpWarningsComponent
  ]
})
export class SharedModule { }
