import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RegisterCompanyModule } from './register-company/register-company.module';
import { SearchModule } from './search/search.module';
import { RegisterCandidateModule } from './register-candidate/register-candidate.module';
import { LogInModule } from './log-in/log-in.module';
import { LogInFormContainerComponent } from './log-in/containers/log-in-form-container/log-in-form-container.component';
import { LogInComponent } from './log-in/components/log-in/log-in.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterCompanyModule,
    SearchModule,
    RegisterCandidateModule,
    LogInModule
  ],
  declarations: []
})
export class FeatureModule { }
