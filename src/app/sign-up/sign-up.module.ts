import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCandidateModule } from './register-candidate/register-candidate.module';
import { RegisterCompanyModule } from './register-company/register-company.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterCandidateModule,
    RegisterCompanyModule
  ],
  declarations: []
})
export class SignUpModule { }
