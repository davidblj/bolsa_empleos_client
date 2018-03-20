import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RegisterCompanyModule } from './register-company/register-company.module';
import { SearchModule } from './search/search.module';
import { RegisterCandidateModule } from './register-candidate/register-candidate.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterCompanyModule,
    SearchModule,
    RegisterCandidateModule
  ],
  declarations: []
})
export class FeatureModule { }
