import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SearchService } from '../../../services/guest/search.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnChanges{

  @Input() jobId;
  job;

  constructor(private searchService: SearchService) { }

  ngOnChanges(changes) {
    if (changes.jobId) {

      console.log('input changed');
      this.searchService.getJobDetails(this.jobId).subscribe(
        (job) => {
          this.job = job
        },
        () => {
          // todo: handle an error response
        }
      )
    }
  }
}
