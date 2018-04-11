import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyDashboardComponent,
    children: [
      {
        path: 'ofertas',
        loadChildren: 'app/company-dashboard/employment/employment.module#EmploymentModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyDashboardRoutingModule { }
