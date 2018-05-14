import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  pageLimit = 6;

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
