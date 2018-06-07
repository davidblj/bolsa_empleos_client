import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../../../shared/interfaces/job.interface';
import { JobOfferModalComponent } from '../../components/job-offer-modal/job-offer-modal.component';
import { CompanyUserService } from '../../../../core/services/company-user.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { JobOfferComponent } from '../../components/job-offer/job-offer.component';

@Component({
  selector: 'app-job-offer-container',
  templateUrl: './job-offer-container.component.html',
  styleUrls: ['./job-offer-container.component.scss']
})
export class JobOfferContainerComponent implements OnInit {

  @ViewChild(JobOfferComponent)
  jobOfferComponent: JobOfferComponent;

  job: Job;
  loading = false;
  modal: BsModalRef;

  constructor(private route: ActivatedRoute,
              private companyUserService: CompanyUserService,
              private modalService: BsModalService) {

    this.route.data.subscribe(
      (data: {jobOffer: Job}) => {
        this.job = data.jobOffer;
      })
  }

  ngOnInit() {
  }

  onSubmitHandler(job: Job) {

    this.loading = true;
    this.companyUserService.addJob(job)
      .subscribe(
        (res) => {
          this.jobOfferComponent.resetFormValues();
          this.loading = false;
          const config = this.setModalConfig(res, false);
          this.modal = this.modalService.show(JobOfferModalComponent, config);
        },
        (error) => {
          this.loading = false;
          const config = this.setModalConfig(error, true);
          this.modal = this.modalService.show(JobOfferModalComponent, config);
        }
      )
  }

  onSaveHandler(job: Job) {

    this.loading = true;
    this.companyUserService.updateJob(job, this.job._id)
      .subscribe(() => {
          this.loading = false;
          this.jobOfferComponent.showUpdateStatus()
        },
        (error) => {
          this.loading = false;
          console.error(error);
        })
  }

  setModalConfig(message: string, error: boolean) {

    return {
      class: 'modal-dialog-centered',
      animated: false,
      initialState: {
        message: message,
        error: error
      }
    };
  }
}
