import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';

// components
import { EmploymentRoutingModule } from './employment-routing.module';
import { EmploymentComponent } from './components/employment/employment.component';
import { EmploymentJobsComponent } from './components/employment-jobs/employment-jobs.component';
import { EmploymentNavigationComponent } from './components/employment-navigation/employment-navigation.component';
import { EmploymentTableComponent } from './components/employment-table/employment-table.component';

// ng g component company-dashboard/employment/components -m company-dashboard/employment/employment.module.ts

@NgModule({
  imports: [
    CommonModule,
    EmploymentRoutingModule
  ],
  declarations: [
    EmploymentComponent,
    EmploymentJobsComponent,
    EmploymentNavigationComponent,
    EmploymentTableComponent]
})
export class EmploymentModule { }
