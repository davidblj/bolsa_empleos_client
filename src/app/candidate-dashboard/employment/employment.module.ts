import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppliedJobsComponent } from './containers/applied-jobs/applied-jobs.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { AppliedJobsContainerComponent } from './containers/applied-jobs-container/applied-jobs-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppliedJobsComponent, EmploymentComponent, AppliedJobsContainerComponent]
})
export class EmploymentModule { }
