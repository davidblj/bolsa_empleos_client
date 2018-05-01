import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOfferRoutingModule } from './job-offer-routing.module';
import { JobOfferComponent } from './components/job-offer/job-offer.component';
import { JobOfferContainerComponent } from './containers/job-offer-container/job-offer-container.component';
import { JobOfferInputComponent } from './components/job-offer-input/job-offer-input.component';
import { JobOfferDropDownInputComponent } from './components/job-offer-drop-down-input/job-offer-drop-down-input.component';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    JobOfferRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    JobOfferComponent,
    JobOfferContainerComponent,
    JobOfferInputComponent,
    JobOfferDropDownInputComponent
  ]
})
export class JobOfferModule { }
