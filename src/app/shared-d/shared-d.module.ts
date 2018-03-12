import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './components/img/img.component';
import { PopoverComponent } from './components/popover/popover.component';

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
