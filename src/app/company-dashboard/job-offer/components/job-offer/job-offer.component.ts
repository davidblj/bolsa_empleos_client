import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CompanyUserService } from '../../../../core/services/company-user.service';

// utils
import { CustomValidators } from '../../../../shared/utils/custom-validators.functions';
import { Job } from '../../../../shared/interfaces/job.interface';
import { JobOfferModalComponent } from '../job-offer-modal/job-offer-modal.component';
import { jobAudience, jobType } from './data';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit, OnDestroy {

  @Input()
  job: Job;

  jobTypeConfig = jobType;
  jobAudienceConfig = jobAudience;

  jobExpiryField = 'Vigencia';
  jobExpiryPlaceHolder = 'mm/dd/aaaa';

  formTitle;
  buttonTitle;
  buttonShape = 'square';
  buttonColor = 'dark';

  form: FormGroup;
  modal: BsModalRef;

  constructor(private fb: FormBuilder,
              private companyUserService: CompanyUserService,
              private modalService: BsModalService) {

    this.createForm();
  }

  ngOnInit() {

    if (this.job) {

      // todo: urgency is left out of our interface. do add it
      this.form.patchValue({
        name: this.job.name,
        description: this.job.description,
        expiry: this.job.expiry,
        to: this.job.to,
        type: this.job.type,
        salary: this.job.salary,
        urgent: this.job.urgent
      });

      this.formTitle = 'Editar Oferta';
      this.buttonTitle = 'Guardar';
      console.log(this.job);

    } else {

      this.formTitle = 'Publica tu oferta';
      this.buttonTitle = 'Publicar';
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: [
        '',
        Validators.required
      ],
      description: [
        '',
        Validators.required
      ],
      expiry: [
        '',
        [
          Validators.required,
          CustomValidators.isDate
        ]
      ],
      to: [
        '',
        Validators.required
      ],
      type: [
        '',
        Validators.required
      ],
      salary: [
        ''
      ],
      urgent: [
        false
      ]
    })
  }

  // todo: move this responsability in to the container
  onSubmitHandler() {

    const job: Job = this.form.value;
    this.companyUserService.addJob(job)
      .subscribe(
        (res) => {
          this.form.reset({expiry: ''});
          const config = this.setModalMessage(res, false);
          this.modal = this.modalService.show(JobOfferModalComponent, config);
        },
        (error) => {
          const config = this.setModalMessage(error, true);
          this.modal = this.modalService.show(JobOfferModalComponent, config);
        }
      )
  }

  setModalMessage(message: string, error: boolean) {

    return {
      class: 'modal-dialog-centered',
      animated: false,
      initialState: {
        message: message,
        error: error
      }
    };
  }

  get formStatus(): boolean {
    return this.form.valid;
  }

  ngOnDestroy(): void {
    console.log('destroy');
    // this.form.reset();
  }
}
