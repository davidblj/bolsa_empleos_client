// librerias, modulos

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestangularModule} from 'ngx-restangular';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// conf: modules

import { FeatureModule } from './feature/feature.module';
import { SharedDModule } from './shared-d/shared-d.module';

// componentes

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/guest-page/home/home.component';
import { HeaderComponent } from './pages/guest-page/header/header.component';
import { CompanyDashboardComponent } from './pages/company-page/company-dashboard/company-dashboard.component';
import { RegisterComponent } from './pages/company-page/register/register.component';
import { LoginComponent } from './pages/guest-page/login/login.component';
import { JobFormComponent } from './pages/company-page/job-form/job-form.component';
import { DashboardTableComponent } from './pages/company-page/dashboard-table/dashboard-table.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { RegisterUserComponent } from './pages/applicant-page/register-user/register-user.component';
import { PickSidesComponent } from './pages/guest-page/pick-sides/pick-sides.component';
import { ApplicantDashboardComponent } from './pages/applicant-page/applicant-dashboard/applicant-dashboard.component';
import { CompanyDetailsComponent } from './pages/guest-page/company-details/company-details.component';
import { JobComponent } from './pages/company-page/job/job.component';

// servicios

import { CompanyService } from './services/organizacion/company.service';
import { RegisterService } from './services/organizacion/register.service';
import { LoginService } from './services/organizacion/login.service';
import { RegisterJobService } from './services/organizacion/register-job.service';
import { JobListService } from './services/organizacion/job-list.service';
import { RegisterApplicantService } from './services/applicant/register-applicant.service';
import { SearchService } from './services/guest/search.service';
import { ApplyService } from './services/applicant/apply.service';
import { JobService } from './services/organizacion/job.service';

// values

import { baseURL } from './shared/baseurl';

// config files

import { RestangularConfigFactory } from './shared/restConfig';
import { CompanyAuthGuard } from './app-routing/guards/companyAuthGuard';
import { JobDetailsComponent } from './pages/applicant-page/job-details/job-details.component';

// modules

import { SharedModule } from './pages/shared/shared.module';
import { ApplicantModule } from './pages/applicant-page/applicant.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    CompanyDashboardComponent,
    JobFormComponent,
    DashboardTableComponent,
    RegisterUserComponent,
    CompanyDetailsComponent,
    PickSidesComponent,
    ApplicantDashboardComponent,
    JobDetailsComponent,
    JobComponent
  ],
  imports: [

    // refactoring modules
    FeatureModule,

    // app modules
    BrowserModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    Ng4GeoautocompleteModule.forRoot(),
    SharedModule,
    ApplicantModule
  ],
  entryComponents: [
    LoginComponent,
    JobFormComponent
  ],
  providers: [
    CompanyService,
    RegisterService,
    LoginService,
    RegisterJobService,
    CompanyAuthGuard,
    JobListService,
    RegisterApplicantService,
    SearchService,
    ApplyService,
    JobService,
    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
