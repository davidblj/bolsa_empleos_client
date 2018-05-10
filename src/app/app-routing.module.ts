import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyAuthGuard } from './core/guards/company-auth-guard.service';
import { CandidateAuthGuard } from './core/guards/candidate-auth-guard.service';

const routes: Routes = [
  {
    path: 'ingresar',
    loadChildren: 'app/log-in/log-in.module#LogInModule'
  },
  {
    path: 'buscar',
    loadChildren: 'app/search/search.module#SearchModule'
  },
  {
    path: 'registro',
    loadChildren: 'app/sign-up/sign-up.module#SignUpModule'
  },
  {
    path: 'empresas',
    loadChildren: 'app/company-dashboard/company-dashboard.module#CompanyDashboardModule',
    canLoad: [ CompanyAuthGuard ]
  },
  {
    path: 'candidatos',
    loadChildren: 'app/candidate-dashboard/candidate-dashboard.module#CandidateDashboardModule',
    canLoad: [ CandidateAuthGuard ]
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
