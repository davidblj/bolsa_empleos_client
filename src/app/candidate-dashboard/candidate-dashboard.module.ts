import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateDashboardRoutingModule } from './candidate-dashboard-routing.module';
import { CandidateDashboardComponent } from './components/candidate-dashboard/candidate-dashboard.component';
import { CandidateDashboardHeaderContainerComponent } from './containers/candidate-dashboard-header-container/candidate-dashboard-header-container.component';
import { CandidateDashboardHeaderComponent } from './components/candidate-dashboard-header/candidate-dashboard-header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CandidateDashboardRoutingModule,
    SharedModule
  ],
  declarations: [CandidateDashboardComponent, CandidateDashboardHeaderContainerComponent, CandidateDashboardHeaderComponent]
})
export class CandidateDashboardModule { }
