import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploymentJobDetailsContainerComponent } from './containers/employment-job-details-container/employment-job-details-container.component';
import { EmploymentJobDetailsResolver } from './shared/employment-job-details-resolver.service';
import { EmploymentAgentContainerComponent } from './containers/employment-agent-container/employment-agent-container.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { EmploymentJobOfferResolverService } from './shared/employment-job-offer-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: EmploymentComponent,
    children: [
      {
        path: '',
        component: EmploymentAgentContainerComponent
      },
      {
        path: 'edit/:job',
        loadChildren: 'app/company-dashboard/job-offer/job-offer.module#JobOfferModule',
        resolve: {
          jobOffer: EmploymentJobOfferResolverService
        }
      },
      {
        path: ':job',
        component: EmploymentJobDetailsContainerComponent,
        resolve: {
          jobDetails: EmploymentJobDetailsResolver
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploymentRoutingModule { }
