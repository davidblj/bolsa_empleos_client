import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateDashboardComponent } from './components/candidate-dashboard/candidate-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateDashboardComponent,
    children: [
      {
        path: 'ofertas',
        loadChildren: 'app/candidate-dashboard/applied-jobs/applied-jobs.module#AppliedJobsModule'
      },
      {
        path: 'perfil',
        loadChildren: 'app/candidate-dashboard/profile/profile.module#ProfileModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateDashboardRoutingModule { }
