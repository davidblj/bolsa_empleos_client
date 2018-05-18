import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

// components
import { EmploymentRoutingModule } from './employment-routing.module';
import { EmploymentComponent } from './components/employment/employment.component';
import { EmploymentJobDetailsComponent } from './components/employment-job-details/employment-job-details.component';
import { EmploymentJobDetailsHeaderComponent } from './components/employment-job-details-header/employment-job-details-header.component';
import { EmploymentJobDetailsContainerComponent } from './containers/employment-job-details-container/employment-job-details-container.component';
import { EmploymentJobDetailsResolver } from './shared/employment-job-details-resolver.service';
import { EmploymentPaginationComponent } from './components/employment-pagination/employment-pagination.component';
import { EmploymentAgentContainerComponent } from './containers/employment-container/employment-agent-container.component';
import { EmploymentJobsComponent } from './components/employment-jobs/employment-jobs.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EmploymentRoutingModule
  ],
  declarations: [
    EmploymentComponent,
    EmploymentJobDetailsComponent,
    EmploymentJobDetailsHeaderComponent,
    EmploymentJobDetailsContainerComponent,
    EmploymentPaginationComponent,
    EmploymentAgentContainerComponent,
    EmploymentJobsComponent
  ],
  providers: [
    EmploymentJobDetailsResolver
  ]
})
export class EmploymentModule { }
