import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// interfaces
import { Job } from '../../../../shared/interfaces/job.interface';

@Component({
  selector: 'app-employment-jobs',
  templateUrl: './employment-jobs.component.html',
  styleUrls: ['./employment-jobs.component.scss']
})
export class EmploymentJobsComponent implements OnInit {

  @Input()
  jobs: Job[];

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() { }

  getApplicants(index) {

    const currentJob = this.jobs[index];
    const applicants = currentJob.applicants;

    return applicants ?
      applicants.amount :
      0
  }

  onClick(id: string) {
    this.router.navigate(['./', id], {relativeTo: this.route });
  }

  // todo: use a container
  onPageChangedHandler(page: number) {
    console.log(page)
  }
}
