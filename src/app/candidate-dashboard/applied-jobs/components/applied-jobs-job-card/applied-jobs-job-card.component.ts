import { Component, Input, OnInit } from '@angular/core';
import { JobSnippet } from '../../../../search/shared/job-snippet.interface';

@Component({
  selector: 'app-applied-jobs-job-card',
  templateUrl: './applied-jobs-job-card.component.html',
  styleUrls: ['./applied-jobs-job-card.component.scss']
})
export class AppliedJobsJobCardComponent implements OnInit {

  @Input()
  job: JobSnippet;

  ngOnInit() {
  }

  get appliedDate() {
    return  'hoy';
  }
}
