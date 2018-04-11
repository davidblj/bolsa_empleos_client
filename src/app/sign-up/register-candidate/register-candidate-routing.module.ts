import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterCandidateEntryPointComponent } from './components/register-candidate-entry-point/register-candidate-entry-point.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterCandidateEntryPointComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RegisterCandidateRoutingModule { }
