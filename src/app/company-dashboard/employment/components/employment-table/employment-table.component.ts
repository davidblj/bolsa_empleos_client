import { Component, Input, OnInit } from '@angular/core';

// interfaces
import { Job } from '../../../../shared/interfaces/job.interface';

@Component({
  selector: 'app-employment-table',
  templateUrl: './employment-table.component.html',
  styleUrls: ['./employment-table.component.scss']
})
export class EmploymentTableComponent implements OnInit {

  @Input()
  jobs: Job[];

  constructor() { }

  ngOnInit() { }

  getApplicants(index) {

    const currentJob = this.jobs[index];
    const applicants = currentJob.applicants;

    return applicants ?
      applicants.amount :
      0
  }
}
