import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './img/img.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ImgComponent,
    PopoverComponent
  ],
  declarations: [
    ImgComponent,
    PopoverComponent
  ]
})
export class SharedDModule { }
