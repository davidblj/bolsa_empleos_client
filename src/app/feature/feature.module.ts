import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SearchModule } from './search/search.module';
import { LogInModule } from './log-in/log-in.module';


@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    LogInModule
  ],
  declarations: []
})
export class FeatureModule { }
