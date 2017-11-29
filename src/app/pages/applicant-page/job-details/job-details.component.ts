import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SearchService } from '../../../services/guest/search.service';
import { ApplyService } from '../../../services/applicant/apply.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnChanges {

  @Input() jobId;
  job;

  constructor(private searchService: SearchService,
              private applyService: ApplyService) { }

  ngOnChanges(changes) {
    if (changes.jobId) {

      this.fetchJobDetails(this.jobId);
    }
  }

  fetchJobDetails(jobId: string) {
    this.jobId = jobId;
    this.searchService.getJobDetails(jobId).subscribe(
      (job) => {
        this.job = job
      },
      () => {
        // todo: handle an error response
      })
  }

  apply() {
    this.applyService.apply(this.jobId).subscribe(
      () => {
        // todo: change the button message
      }
    )
  }
}
