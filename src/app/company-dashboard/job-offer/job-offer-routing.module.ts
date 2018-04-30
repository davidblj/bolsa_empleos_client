import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobOfferContainerComponent } from './containers/job-offer-container/job-offer-container.component';

const routes: Routes = [
  {
    path: '',
    component: JobOfferContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOfferRoutingModule { }

