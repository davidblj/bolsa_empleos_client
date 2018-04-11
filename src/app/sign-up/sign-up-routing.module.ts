import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
    children: [
      {
        path: 'empresas',
        loadChildren: 'app/sign-up/register-company/register-company.module#RegisterCompanyModule'
      },
      {
        path: 'candidatos',
        loadChildren: 'app/sign-up/register-candidate/register-candidate.module#RegisterCandidateModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SignUpRoutingModule { }
