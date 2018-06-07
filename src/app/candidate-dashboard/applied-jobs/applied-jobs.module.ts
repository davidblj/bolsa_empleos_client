import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppliedJobsComponent } from './components/applied-jobs/applied-jobs.component';
import { AppliedJobsTableContainerComponent } from './containers/applied-jobs-table-container/applied-jobs-table-container.component';
import { AppliedJobsTableComponent } from './components/applied-jobs-table/applied-jobs-table.component';
import { AppliedJobsRoutingModule } from './applied-jobs-routing.module';
import { AppliedJobsJobCardComponent } from './components/applied-jobs-job-card/applied-jobs-job-card.component';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppliedJobsRoutingModule,
    SharedModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    AppliedJobsTableComponent,
    AppliedJobsComponent,
    AppliedJobsTableContainerComponent,
    AppliedJobsJobCardComponent
  ]
})
export class AppliedJobsModule { }
