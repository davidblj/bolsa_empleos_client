import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// modules
import { SharedModule } from '../shared/shared.module';

// components
import { SearchAgentComponent } from './containers/search-agent/search-agent.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchDetailsComponent } from './components/search-details/search-details.component';
import { SearchRowComponent } from './components/search-row/search-row.component';
import { SearchCategoryComponent } from './components/search-category/search-category.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchDashboardComponent } from './components/search-dashboard/search-dashboard.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { SearchJobComponent } from './containers/search-job/search-job.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchApplyComponent } from './components/search-apply/search-apply.component';
import { SearchApplyContainerComponent } from './containers/search-apply-container/search-apply-container.component';

// services
import { SearchJobsService } from './shared/search-jobs.service';

@NgModule({
  imports: [
    SearchRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    SearchDashboardComponent
  ],
  declarations: [
    SearchAgentComponent,
    SearchFilterComponent,
    SearchListComponent,
    SearchDetailsComponent,
    SearchRowComponent,
    SearchCategoryComponent,
    SearchResultsComponent,
    SearchDashboardComponent,
    SearchHeaderComponent,
    SearchJobComponent,
    SearchApplyComponent,
    SearchApplyContainerComponent
  ],
  providers: [
    SearchJobsService,
  ]
})
export class SearchModule { }
