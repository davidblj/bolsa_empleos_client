import { Routes} from '@angular/router';

import { RegisterCardComponent } from '../sign-up/register-company/components/register-card/register-card.component';
import { RegisterCandidateEntryPointComponent } from '../sign-up/register-candidate/components/register-candidate-entry-point/register-candidate-entry-point.component';
import { SearchDashboardComponent } from '../feature/search/components/search-dashboard/search-dashboard.component';
import { LogInComponent } from '../feature/log-in/components/log-in/log-in.component';

export const routes: Routes = [

  {path: 'dev', component: RegisterCardComponent},
  {path: 'devs', component: SearchDashboardComponent},
  {path: 'devc', component: RegisterCandidateEntryPointComponent},
  {path: 'devl', component: LogInComponent},
  // {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
