import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './components/img/img.component';
import { PopoverComponent } from './components/popover/popover.component';
import { SignUpCardComponent } from './components/sign-up-card/sign-up-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ImgComponent,
    PopoverComponent,
    SignUpCardComponent
  ],
  declarations: [
    ImgComponent,
    PopoverComponent,
    SignUpCardComponent
  ]
})
export class SharedDModule { }
