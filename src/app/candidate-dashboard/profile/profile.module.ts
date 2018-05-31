import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileUserDetailsComponent } from './components/profile-user-details/profile-user-details.component';
import { ProfileFormContainerComponent } from './components/profile-form-container/profile-form-container.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    ProfileUserDetailsComponent,
    ProfileFormContainerComponent
  ]
})
export class ProfileModule { }
