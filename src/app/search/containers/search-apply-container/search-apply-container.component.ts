import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CandidateUserService } from '../../../core/services/candidate-user.service';
import { Job } from '../../../shared/interfaces/job.interface';
import { JobSnippet } from '../../shared/job-snippet.interface';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Roles } from '../../../shared/utils/globals.variables';

@Component({
  selector: 'app-search-apply-container',
  templateUrl: './search-apply-container.component.html',
  styleUrls: ['./search-apply-container.component.scss']
})
export class SearchApplyContainerComponent implements OnInit {

  @ViewChild('warningModal')
  warningModal;

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

  userRole: Roles;

  constructor(private candidateUserService: CandidateUserService,
              private authService: AuthService,
              private modalService: BsModalService,
              private router: Router) {

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

    this.candidateUserService.addJob(this.job)
      .subscribe(
        (res: boolean) => {
          this.handleResponse(res);
        },
        (message) => {
          console.error(message);
        })
  }

  handleResponse(status: boolean) {

    if (status ) {

      this.applyingStatus = true;
      this.addJobLocally();

    } else {

      const user = this.authService.getUser();

      if (user) {
        this.userRole = user.role;
        this.modalService.show(this.warningModal, this.setModalConfig());
      } else {
        this.router.navigate(['./ingresar']);
      }
    }
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

  setModalConfig() {

    return {
      class: 'modal-dialog-centered',
      animated: true
    };
  }

  get job() {

    return this._job;
  }
}
