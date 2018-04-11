import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { CompanyDashboardRoutingModule } from './company-dashboard-routing.module';

// components
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyDashboardPanelComponent } from './components/company-dashboard-panel/company-dashboard-panel.component';
import { CompanyDashboardHeaderComponent } from './components/company-dashboard-header/company-dashboard-header.component';

// ng g component company-dashboard/components/company-dashboard -m company-dashboard/company-dashboard.module.ts

@NgModule({
  imports: [
    CommonModule,
    CompanyDashboardRoutingModule
  ],
  declarations: [
    CompanyDashboardComponent,
    CompanyDashboardPanelComponent,
    CompanyDashboardHeaderComponent
  ]
})
export class CompanyDashboardModule { }
