import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploymentComponent } from './components/employment/employment.component';
import { EmploymentJobsComponent } from './components/employment-jobs/employment-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: EmploymentComponent,
    children: [
      {
        path: '',
        component: EmploymentJobsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploymentRoutingModule { }
