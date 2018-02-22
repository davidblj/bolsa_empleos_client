import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCheckBoxDirective } from './shared/display-check-box.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DisplayCheckBoxDirective
  ],
  exports: [
    DisplayCheckBoxDirective
  ]
})
export class ApplicantModule { }
