import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { CompanyDashboardRoutingModule } from './company-dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

// components
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyDashboardPanelComponent } from './components/company-dashboard-panel/company-dashboard-panel.component';
import { CompanyDashboardHeaderComponent } from './components/company-dashboard-header/company-dashboard-header.component';
import { CompanyDashboardHeaderContainerComponent } from './containers/company-dashboard-header-container/company-dashboard-header-container.component';


@NgModule({
  imports: [
    CommonModule,
    CompanyDashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    CompanyDashboardComponent,
    CompanyDashboardPanelComponent,
    CompanyDashboardHeaderComponent,
    CompanyDashboardHeaderContainerComponent
  ]
})
export class CompanyDashboardModule { }
