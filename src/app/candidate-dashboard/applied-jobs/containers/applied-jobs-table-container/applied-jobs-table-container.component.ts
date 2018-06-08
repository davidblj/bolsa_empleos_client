import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidateUserService } from '../../../../core/services/candidate-user.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AppliedJobsTableComponent } from '../../components/applied-jobs-table/applied-jobs-table.component';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-applied-jobs-table-container',
  templateUrl: './applied-jobs-table-container.component.html'
})
export class AppliedJobsTableContainerComponent implements OnInit {

  @ViewChild('confirmationModal')
  confirmationModal;

  @ViewChild(AppliedJobsTableComponent)
  appliedJobsTableComponent: AppliedJobsTableComponent;

  jobs$ = this.candidateUserService.getJobs();

  jobIdToDelete: string;
  modalReference: BsModalRef;

  confirmButtonColor = 'red';
  buttonShape = 'square';
  buttonHoverColor = 'none';

  constructor(private candidateUserService: CandidateUserService,
              private modalService: BsModalService) { }

  ngOnInit() {
  }

  onDeleteHandler(id: string) {

    this.jobIdToDelete = id;
    this.modalReference = this.modalService.show(this.confirmationModal, this.setModalConfig());
  }

  setModalConfig() {

    return {
      class: 'modal-dialog-centered',
      animated: true
    };
  }

  confirm() {

    this.candidateUserService.deleteJob(this.jobIdToDelete).subscribe(
      () => {
        this.appliedJobsTableComponent.deleteJobFromList(this.jobIdToDelete);
        this.modalReference.hide();
      },
      (message) => {
        console.error(message);
        this.modalReference.hide();
      }
    );
  }

  decline() {
    this.modalReference.hide();
  }
}
