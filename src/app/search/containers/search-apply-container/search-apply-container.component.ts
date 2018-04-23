import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CandidateUserService } from '../../../core/services/candidate-user.service';
import { Job } from '../../../shared/interfaces/job.interface';
import { JobSnippet } from '../../shared/job-snippet.interface';

@Component({
  selector: 'app-search-apply-container',
  templateUrl: './search-apply-container.component.html',
  styleUrls: ['./search-apply-container.component.scss']
})
export class SearchApplyContainerComponent implements OnInit {

  @Input()
  set job(job: Job) {

    this._job = job;
    this.updateApplyingStatus();
  }

  @Output()
  update = new EventEmitter<any>();

  appliedJobs: JobSnippet[] = [];
  applyingStatus = false;
  _job: Job;

  constructor(private candidateUserService: CandidateUserService) {

    // do get the applying jobs before the change
    // detection tries to update (in our setter)
    // the applying status
    this.candidateUserService.appliedJobs$
      .subscribe((appliedJobs) => {
        this.appliedJobs = appliedJobs;
      })
  }

  ngOnInit() {}

  onApply() {

    this.candidateUserService.addJob(this.job._id)
      .subscribe(
        (res: boolean) => {
          this.handleResponse(res);
        },
        (message) => {
          this.handleError(message)
        })
  }

  handleResponse(status: boolean) {

    if (status ) {

      this.applyingStatus = true;
      this.addJobLocally();

    } else {

      const message = 'Si quieres aplicar, ¡ tu sesión deberás iniciar !';
      this.handleError(message);
    }
  }

  handleError(message: string) {

    console.error(message);
  }

  addJobLocally() {

    const job: JobSnippet = {
      _id: this.job._id,
      name: this.job.name,
      owner: this.job.owner
    };

    this.candidateUserService.addJobLocally(job);
  }

  updateApplyingStatus() {

    const status = this.appliedJobs.some((value: JobSnippet) => {
      return value._id === this.job._id;
    });

    this.applyingStatus = status;
  }

  get job() {

    return this._job;
  }
}
