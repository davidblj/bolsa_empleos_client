import { Component, Input } from '@angular/core';
import { SearchJobsService } from '../../shared/search-jobs.service';

// classes
import { Job } from '../../shared/job.interface';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.scss']
})
export class SearchJobComponent {

  _id: string;
  job: Job;

  @Input()
  set id(id: string) {

    this._id = id;
    this.fetchJobDetails()
  }

  constructor(private searchJobsService: SearchJobsService) { }

  fetchJobDetails() {
    this.searchJobsService.getJob(this._id)
      .subscribe((job: Job) => {
        this.job = job;
      });
  }
}
