import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmploymentComponent } from './components/employment/employment.component';
import { AppliedJobsContainerComponent } from './containers/applied-jobs-container/applied-jobs-container.component';
import { AppliedJobsComponent } from './components/applied-jobs/applied-jobs.component';
import { EmploymentRoutingModule } from './employment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmploymentRoutingModule
  ],
  declarations: [
    AppliedJobsComponent,
    EmploymentComponent,
    AppliedJobsContainerComponent
  ]
})
export class EmploymentModule { }
