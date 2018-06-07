import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobSnippet } from '../../../../search/shared/job-snippet.interface';

@Component({
  selector: 'app-applied-jobs-table',
  templateUrl: './applied-jobs-table.component.html',
  styleUrls: ['./applied-jobs-table.component.scss']
})
export class AppliedJobsTableComponent implements OnInit {

  @Input()
  jobs: JobSnippet[];

  @Output()
  onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onDeleteHandler(id: string) {
    this.onDelete.emit(id);
  }

  deleteJobFromList(id: string) {

    let jobPosition = -1;
    this.jobs.forEach((job: JobSnippet, index) => {
      if (job._id === id) {
        jobPosition = index;
      }
    });

    if (jobPosition >= 0) {
      this.jobs.splice(jobPosition, 1);
    }
  }
}
