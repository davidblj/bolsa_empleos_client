import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOfferRoutingModule } from './job-offer-routing.module';
import { JobOfferComponent } from './components/job-offer/job-offer.component';
import { JobOfferContainerComponent } from './containers/job-offer-container/job-offer-container.component';

@NgModule({
  imports: [
    CommonModule,
    JobOfferRoutingModule
  ],
  declarations: [
    JobOfferComponent,
    JobOfferContainerComponent
  ]
})
export class JobOfferModule { }
