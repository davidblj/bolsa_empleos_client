import { Component, Input, OnInit } from '@angular/core';
import { JobSnippet } from '../../../../search/shared/job-snippet.interface';

@Component({
  selector: 'app-applied-jobs-table',
  templateUrl: './applied-jobs-table.component.html',
  styleUrls: ['./applied-jobs-table.component.scss']
})
export class AppliedJobsTableComponent implements OnInit {

  @Input()
  jobs: JobSnippet[];

  constructor() { }

  ngOnInit() {
    console.log(this.jobs);
  }
}
