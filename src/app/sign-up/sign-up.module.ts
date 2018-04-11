import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCandidateModule } from './register-candidate/register-candidate.module';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    SignUpRoutingModule,
    RegisterCandidateModule,
  ],
  declarations: [SignUpComponent]
})
export class SignUpModule { }
