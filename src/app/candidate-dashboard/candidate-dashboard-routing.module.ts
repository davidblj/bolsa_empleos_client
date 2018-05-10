import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateDashboardComponent } from './components/candidate-dashboard/candidate-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateDashboardComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateDashboardRoutingModule { }
