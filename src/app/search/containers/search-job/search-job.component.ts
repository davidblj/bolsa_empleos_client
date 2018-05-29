import { Component, Input } from '@angular/core';
import { SearchJobsService } from '../../shared/search-jobs.service';

// classes
import { Job } from '../../../shared/interfaces/job.interface';
import { JobService } from '../../../core/services/job.service';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.scss']
})
export class SearchJobComponent {

  job: Job = null;

  @Input()
  set id(id: string) {

    this.fetchJobDetails(id)
  }

  constructor(private searchJobsService: SearchJobsService,
              private jobService: JobService) { }

  fetchJobDetails(id: string) {

    if (id) {

      this.jobService.getJob(id)
        .subscribe((job: Job) => {
          this.job = job;
        });
    }
  }
}
