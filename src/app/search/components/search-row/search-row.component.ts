import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';

// services
import { CandidateUserService } from '../../../core/services/candidate-user.service';

@Component({
  selector: 'app-search-row',
  templateUrl: './search-row.component.html',
  styleUrls: ['./search-row.component.scss']
})
export class SearchRowComponent implements OnInit {

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

  highlight = false;
  applyingStatus = false;
  rowId: string;

  constructor(private candidateUserService: CandidateUserService) {}

  ngOnInit() {
    this.rowId = this.job._id;
  }

  updateApplyingStatus() {

    if (this.job) {
      this.applyingStatus = this.candidateUserService.getApplyingStatus(this.job._id);
    }
  }

  onClick() {
    this.select.emit(this.rowId);
    this.highlight = !this.highlight;
  }

  get job() {
    return this._job;
  }

  get status() {
    return this.rowId === this.currentId;
  }
}
