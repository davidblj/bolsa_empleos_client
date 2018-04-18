import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';

// components
import { EmploymentRoutingModule } from './employment-routing.module';
import { EmploymentComponent } from './components/employment/employment.component';
import { EmploymentJobsComponent } from './components/employment-jobs/employment-jobs.component';
import { EmploymentNavigationComponent } from './components/employment-navigation/employment-navigation.component';
import { EmploymentTableComponent } from './components/employment-table/employment-table.component';
import { EmploymentTableContainerComponent } from './containers/employment-table-container/employment-table-container.component';
import { SharedModule } from '../../shared/shared.module';

// ng g component company-dashboard/employment/components -m company-dashboard/employment/employment.module.ts

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EmploymentRoutingModule
  ],
  declarations: [
    EmploymentComponent,
    EmploymentJobsComponent,
    EmploymentNavigationComponent,
    EmploymentTableComponent,
    EmploymentTableContainerComponent]
})
export class EmploymentModule { }
