import { Component, Input, OnChanges } from '@angular/core';
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
  applyMessage;
  applied;

  constructor(private searchService: SearchService,
              private applyService: ApplyService) { }

  ngOnChanges(changes) {
    if (changes.jobId) {

      this.fetchJobDetails(this.jobId);
      this.applyMessage = 'Apply now';
      this.applied = false;

      // Did i already apply to this job ?
      if (this.applyService.isApplying(this.jobId)) {
        this.applyMessage = 'Applied';
        this.applied = true;
      }
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

    if (!this.applied) {
      this.applyService.apply(this.jobId).subscribe(
        () => {
          this.applyService.saveAppliedJob(this.jobId);
          this.applyMessage = 'Applied';
          this.applied = true;
        });
    } else {

      // todo: unsubscribed
    }
  }
}
