import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobFormComponent } from '../job-form/job-form.component';

// clases

import { Job } from '../../../models/organizacion/job';

// servicios

import { JobListService } from '../../../services/organizacion/job-list.service';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  jobs: Job[];
  jobDetailsId = 'jobDetails';
  jobId;

  constructor(private ngbModal: NgbModal,
              private modalService: ModalService,
              private jobListService: JobListService) {

    const user = localStorage.getItem('currentUser');
    const token = JSON.parse(user).token;

    this.jobListService.getJobs(token).subscribe((jobs) => this.jobs = jobs);
    this.jobListService.jobEvent.subscribe((job) => this.jobs.unshift(job));
  }

  ngOnInit() {
  }

  open() {
    const modalRef = this.ngbModal.open(JobFormComponent, {windowClass: 'modal-style', keyboard: false});
  }

  openJobDetails(job) {
    this.jobId = job._id;
    this.modalService.open(this.jobDetailsId);
  }
}
