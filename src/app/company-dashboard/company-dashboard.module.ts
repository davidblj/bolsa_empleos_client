import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { CompanyDashboardRoutingModule } from './company-dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

// components
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyDashboardPanelComponent } from './components/company-dashboard-panel/company-dashboard-panel.component';


@NgModule({
  imports: [
    CommonModule,
    CompanyDashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    CompanyDashboardComponent,
    CompanyDashboardPanelComponent
  ]
})
export class CompanyDashboardModule { }
