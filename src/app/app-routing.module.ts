import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    loadChildren: 'app/company-dashboard/company-dashboard.module#CompanyDashboardModule'
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
