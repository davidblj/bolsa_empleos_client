import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploymentComponent } from './components/employment/employment.component';
import { EmploymentJobsComponent } from './components/employment-jobs/employment-jobs.component';
import { EmploymentJobDetailsContainerComponent } from './containers/employment-job-details-container/employment-job-details-container.component';
import { EmploymentJobDetailsResolver } from './shared/employment-job-details-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: EmploymentComponent,
    children: [
      {
        path: '',
        component: EmploymentJobsComponent
      },
      {
        path: ':job',
        component: EmploymentJobDetailsContainerComponent,
        resolve: {
          jobDetails: EmploymentJobDetailsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploymentRoutingModule { }
