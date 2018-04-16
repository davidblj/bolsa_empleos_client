import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandidateUserService } from '../../../core/services/candidate-user.service';
import { Job } from '../../shared/job.interface';
import { JobSnippet } from '../../shared/job-snippet.interface';

@Component({
  selector: 'app-search-apply-container',
  templateUrl: './search-apply-container.component.html',
  styleUrls: ['./search-apply-container.component.scss']
})
export class SearchApplyContainerComponent {

  _job: Job;
  applyingStatus = false;

  @Input()
  set job(job: Job) {

    this._job = job;
    this.updateApplyingStatus();
  }

  @Output()
  update = new EventEmitter<any>();

  constructor(private candidateUserService: CandidateUserService) {}

  onApply() {

    this.candidateUserService.addJob(this._job._id)
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

      this.addJobLocally();

    } else {

      const message = 'Si quieres aplicar, ¡ tu sesión deberás iniciar !';
      this.handleError(message);
    }
  }

  addJobLocally() {

    const job: JobSnippet = {
      _id: this._job._id,
      name: this._job.name,
      owner: this._job.owner
    };

    this.candidateUserService.appliedJobs.push(job);
    this.updateApplyingStatus();
  }

  updateApplyingStatus() {

    this.applyingStatus = this.candidateUserService.getApplyingStatus(this._job._id);
  }

  handleError(message: string) {

    console.error(message);
  }
}
