import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileUserDetailsComponent } from './components/profile-user-details/profile-user-details.component';
import { ProfileFormContainerComponent } from './components/profile-form-container/profile-form-container.component';
import { SharedModule } from '../../shared/shared.module';
import { NameComponent } from './components/inputs/name/name.component';
import { EmailComponent } from './components/inputs/email/email.component';
import { ContactComponent } from './components/inputs/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileFileInputComponent } from './components/profile-file-input/profile-file-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    ProfileUserDetailsComponent,
    ProfileFormContainerComponent,
    NameComponent,
    EmailComponent,
    ContactComponent,
    ProfileFileInputComponent
  ]
})
export class ProfileModule { }
