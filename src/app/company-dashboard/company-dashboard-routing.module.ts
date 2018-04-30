import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyAuthGuard } from '../core/guards/company-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CompanyDashboardComponent,
    canActivate: [ CompanyAuthGuard ],
    children: [
      {
        path: 'ofertas',
        loadChildren: 'app/company-dashboard/employment/employment.module#EmploymentModule'
      },
      {
        path: 'nueva_oferta',
        loadChildren: 'app/company-dashboard/job-offer/job-offer.module#JobOfferModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyDashboardRoutingModule { }
