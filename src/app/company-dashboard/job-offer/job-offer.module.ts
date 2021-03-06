import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

// components
import { JobOfferRoutingModule } from './job-offer-routing.module';
import { JobOfferComponent } from './components/job-offer/job-offer.component';
import { JobOfferContainerComponent } from './containers/job-offer-container/job-offer-container.component';
import { JobOfferDateInputComponent } from './components/job-offer-date-input/job-offer-date-input.component';
import { JobOfferToggleInputComponent } from './components/job-offer-toggle-input/job-offer-toggle-input.component';
import { NameComponent } from './components/inputs/name/name.component';
import { SalaryComponent } from './components/inputs/salary/salary.component';
import { DescriptionComponent } from './components/inputs/description/description.component';
import { JobOfferModalComponent } from './components/job-offer-modal/job-offer-modal.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    BsDatepickerModule,
    ModalModule.forRoot(),
    JobOfferRoutingModule
  ],
  entryComponents: [
    JobOfferModalComponent
  ],
  declarations: [
    JobOfferComponent,
    JobOfferContainerComponent,
    JobOfferDateInputComponent,
    JobOfferToggleInputComponent,
    NameComponent,
    SalaryComponent,
    DescriptionComponent,
    JobOfferModalComponent,
  ]
})
export class JobOfferModule { }
