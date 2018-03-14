import { Routes} from '@angular/router';

import { HomeComponent} from '../pages/guest-page/home/home.component';
import { RegisterComponent} from '../pages/company-page/register/register.component';
import { CompanyDashboardComponent} from '../pages/company-page/company-dashboard/company-dashboard.component';
import { CompanyAuthGuard} from './guards/companyAuthGuard';
import { DashboardTableComponent } from '../pages/company-page/dashboard-table/dashboard-table.component';
import { RegisterUserComponent } from '../pages/applicant-page/register-user/register-user.component';
import { CompanyDetailsComponent } from '../pages/guest-page/company-details/company-details.component';
import { PickSidesComponent } from '../pages/guest-page/pick-sides/pick-sides.component';
import { ApplicantDashboardComponent } from '../pages/applicant-page/applicant-dashboard/applicant-dashboard.component';

import { RegisterCardComponent } from '../feature/register-company/components/register-card/register-card.component';
import { SearchDashboardComponent } from '../feature/search/components/search-dashboard/search-dashboard.component';

// todo: rename all the routes with a meaningful name
export const routes: Routes = [

  {path: 'dev', component: RegisterCardComponent},
  {path: 'devs', component: SearchDashboardComponent},

  {path: 'search', component: ApplicantDashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pick-sides',
    children: [
      {path: '', component: PickSidesComponent},
      {path: 'user-registration', component: RegisterUserComponent},
      {path: 'company-registration', component: RegisterComponent}
    ]
  },
  {path: 'company-details/:companyName', component: CompanyDetailsComponent},
  {path: 'dashboard', component: CompanyDashboardComponent, canActivate: [CompanyAuthGuard], children: [
    {path: '', component: DashboardTableComponent },
  ]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
