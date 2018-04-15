import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterCompanyRoutingModule } from './register-company-routing.module';

// components
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { RegisterFormComponent } from './containers/register-form/register-form.component';
import { RegisterSidePaneComponent } from './components/register-side-pane/register-side-pane.component';
import { RegisterStepOneComponent } from './components/register-step-one/register-step-one.component';
import { LogoComponent } from './components/register-inputs/logo/logo.component';
import { RegisterStepperComponent } from './components/register-stepper/register-stepper.component';
import { RegisterInfoComponent } from './components/register-info/register-info.component';
import { RegisterStepTwoComponent } from './components/register-step-two/register-step-two.component';
import { NameComponent } from './components/register-inputs/name/name.component';
import { NitComponent } from './components/register-inputs/nit/nit.component';
import { WebpageComponent } from './components/register-inputs/webpage/webpage.component';
import { DetailsComponent } from './components/register-inputs/details/details.component';
import { SectorComponent } from './components/register-inputs/sector/sector.component';
import { RegisterService } from './shared/register.service';
import { AdminComponent } from './components/register-inputs/admin/admin.component';
import { RegisterStepThreeComponent } from './components/register-step-three/register-step-three.component';
import { CityComponent } from './components/register-inputs/city/city.component';


@NgModule({
  imports: [
    CommonModule,
    RegisterCompanyRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    RegisterCardComponent,
    RegisterFormComponent,
    RegisterSidePaneComponent,
    RegisterStepOneComponent,
    LogoComponent,
    RegisterStepperComponent,
    RegisterInfoComponent,
    RegisterStepTwoComponent,
    NameComponent,
    NitComponent,
    WebpageComponent,
    DetailsComponent,
    SectorComponent,
    AdminComponent,
    RegisterStepThreeComponent,
    CityComponent
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterCompanyModule { }
