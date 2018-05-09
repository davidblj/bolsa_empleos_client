import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// utils
import { CustomValidators } from '../../../../shared/utils/custom-validators.functions';
import { Job } from '../../../../shared/interfaces/job.interface';
import { CompanyUserService } from '../../../../core/services/company-user.service';
import { JobOfferModalComponent } from '../job-offer-modal/job-offer-modal.component';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit {

  jobTypeField = 'Modalidad de la oferta';
  jobTypePlaceHolder = 'tipo';
  jobTypeOptions = [
    'Tiempo Completo',
    'Tiempo Medio',
    'Contrato',
    'Temporal'
  ];

  jobAudienceField = 'Hacia quien esta dirigida la oferta';
  jobAudiencePlaceHolder = 'audiencia';
  jobAudienceOptions = [
    'Egresado',
    'Practicante',
    'Ambos'
  ];

  jobExpiryField = 'Vigencia';
  jobExpiryPlaceHolder = 'mm/dd/aaaa';

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
        '',
        CustomValidators.isNumeric
      ],
      urgent: [
        false
      ]
    })
  }

  onSubmitHandler() {

    const job: Job = this.form.value;
    this.companyUserService.addJob(job)
      .subscribe(
        (res) => {
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
}
