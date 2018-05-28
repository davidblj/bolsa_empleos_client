import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpPickProfileComponent } from './components/sign-up-pick-profile/sign-up-pick-profile.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
    children: [
      {
        path: '',
        component: SignUpPickProfileComponent
      },
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
