import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { RegisterCandidateModule } from './register-candidate/register-candidate.module';
import { SharedModule } from '../shared/shared.module';

// components
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpPickProfileComponent } from './components/sign-up-pick-profile/sign-up-pick-profile.component';

@NgModule({
  imports: [
    CommonModule,
    SignUpRoutingModule,
    RegisterCandidateModule,
    SharedModule
  ],
  declarations: [SignUpComponent, SignUpPickProfileComponent]
})
export class SignUpModule { }
