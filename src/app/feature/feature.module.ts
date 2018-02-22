import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RegisterCompanyModule } from './register-company/register-company.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterCompanyModule
  ],
  declarations: []
})
export class FeatureModule { }
