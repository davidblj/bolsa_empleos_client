import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './components/img/img.component';
import { PopoverComponent } from './components/popover/popover.component';
import { SignUpCardComponent } from './components/sign-up-card/sign-up-card.component';
import { InputComponent } from './components/input/input.component';
import { HintComponent } from './components/hint/hint.component';
import { WarningComponent } from './components/warning/warning.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpButtonComponent } from './components/sign-up-common/sign-up-button/sign-up-button.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { StepperComponent } from './components/stepper/stepper.component';

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
    ButtonComponent
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
    StepperComponent
  ]
})
export class SharedDModule { }
