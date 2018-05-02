import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';

// components
import { JobOfferRoutingModule } from './job-offer-routing.module';
import { JobOfferComponent } from './components/job-offer/job-offer.component';
import { JobOfferContainerComponent } from './containers/job-offer-container/job-offer-container.component';
import { JobOfferInputComponent } from './components/job-offer-input/job-offer-input.component';
import { JobOfferDropDownInputComponent } from './components/job-offer-drop-down-input/job-offer-drop-down-input.component';
import { JobOfferDateInputComponent } from './components/job-offer-date-input/job-offer-date-input.component';

@NgModule({
  imports: [
    CommonModule,
    JobOfferRoutingModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    JobOfferComponent,
    JobOfferContainerComponent,
    JobOfferInputComponent,
    JobOfferDropDownInputComponent,
    JobOfferDateInputComponent
  ]
})
export class JobOfferModule { }
