import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOfferRoutingModule } from './job-offer-routing.module';
import { JobOfferComponent } from './components/job-offer/job-offer.component';
import { JobOfferContainerComponent } from './containers/job-offer-container/job-offer-container.component';
import { JobOfferInputComponent } from './components/job-offer-input/job-offer-input.component';

@NgModule({
  imports: [
    CommonModule,
    JobOfferRoutingModule
  ],
  declarations: [
    JobOfferComponent,
    JobOfferContainerComponent,
    JobOfferInputComponent
  ]
})
export class JobOfferModule { }
