import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RegisterCompanyModule } from './register-company/register-company.module';
import { SearchModule } from './search/search.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterCompanyModule,
    SearchModule
  ],
  declarations: []
})
export class FeatureModule { }
