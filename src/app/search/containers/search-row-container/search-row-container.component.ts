import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';

// services
import { CandidateUserService } from '../../../core/services/candidate-user.service';

@Component({
  selector: 'app-search-row-container',
  templateUrl: './search-row-container.component.html',
  styleUrls: ['./search-row-container.component.scss']
})
export class SearchRowContainerComponent implements OnInit {

  _job: JobSnippet;

  @Input()
  set job(job: JobSnippet) {

    this._job = job;
    this.updateApplyingStatus();
  }

  @Input()
  currentId: string;

  @Output()
  select = new EventEmitter<string>();

  applyingStatus = false;
  appliedJobs: JobSnippet[] = [];

  constructor(private candidateUserService: CandidateUserService) {

    this.candidateUserService.appliedJobs$
      .subscribe((appliedJobs) => {
        this.appliedJobs = appliedJobs;

        // watch for changes to update the
        // status variable
        this.updateApplyingStatus();
      })
  }

  ngOnInit() { }

  updateApplyingStatus() {

    // this instructions will execute one time
    // before the change detection populates
    // the job input variable, and hence we ask
    // for its existence
    if (this.job) {

      const status = this.appliedJobs.some((value: JobSnippet) => {
        return value._id === this.job._id;
      });

      this.applyingStatus = status;
    }
  }

  onSelect(id: string) {
    this.select.emit(id);
  }

  get job() {
    return this._job;
  }
}
