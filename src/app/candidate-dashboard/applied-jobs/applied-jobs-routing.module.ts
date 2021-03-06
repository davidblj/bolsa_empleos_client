import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppliedJobsComponent } from './components/applied-jobs/applied-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: AppliedJobsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppliedJobsRoutingModule { }
