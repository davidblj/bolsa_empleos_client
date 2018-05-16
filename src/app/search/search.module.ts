import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { SearchRowContainerComponent } from './containers/search-row-container/search-row-container.component';
import { SearchPaginatorComponent } from './components/search-paginator/search-paginator.component';

// services
import { SearchJobsService } from './shared/search-jobs.service';
import { SearchNotificationContainerComponent } from './containers/search-notification-container/search-notification-container.component';
import { SearchHeaderContainerComponent } from './containers/search-header-container/search-header-container.component';
import { CategoryComponent } from './components/filters/category/category.component';
import { SearchComponent } from './components/filters/search/search.component';


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
    SearchRowContainerComponent,
    SearchRowComponent,
    SearchCategoryComponent,
    SearchResultsComponent,
    SearchDashboardComponent,
    SearchHeaderComponent,
    SearchJobComponent,
    SearchApplyComponent,
    SearchApplyContainerComponent,
    SearchNotificationContainerComponent,
    SearchPaginatorComponent,
    SearchHeaderComponent,
    SearchHeaderContainerComponent,
    CategoryComponent,
    SearchComponent
  ],
  providers: [
    SearchJobsService,
  ]
})
export class SearchModule { }
