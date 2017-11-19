import { Routes} from '@angular/router';

import { HomeComponent} from '../pages/home/home.component';
import { RegisterComponent} from '../pages/authentication/register/register.component';
import { CompanyDashboardComponent} from '../pages/employer-page/company-dashboard/company-dashboard.component';
import { CompanyAuthGuard} from './guards/companyAuthGuard';
import { DashboardTableComponent } from '../pages/employer-page/dashboard-table/dashboard-table.component';
import { RegisterUserComponent } from '../pages/employee-page/register-user/register-user.component';
import { CompanyDetailsComponent } from '../pages/guest-page/company-details/company-details.component';
import { PickSidesComponent } from '../pages/guest-page/pick-sides/pick-sides.component';

export const routes: Routes = [
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
