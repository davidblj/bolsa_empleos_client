import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { JobService } from '../../../services/organizacion/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnChanges {

  @Input() jobId;
  job;
  candidates;

  constructor(private jobService: JobService) { }

  ngOnChanges(changes) {
    if (changes.jobId) {

      this.jobService.getJobDetails(this.jobId).subscribe(
        (job) => {
          this.job = job;
          this.candidates = job.candidates;
        }
      )
    }
  }
}
