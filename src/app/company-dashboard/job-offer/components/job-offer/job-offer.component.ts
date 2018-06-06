import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
export class JobOfferComponent implements OnInit {

  @Input()
  job: Job;

  @Output()
  onSubmit = new EventEmitter<Job>();

  editingState = false;

  jobTypeConfig = jobType;
  jobAudienceConfig = jobAudience;

  jobExpiryField = 'Vigencia';
  jobExpiryPlaceHolder = 'mm/dd/aaaa';

  formTitle;
  buttonTitle;
  buttonShape = 'square';
  buttonColor = 'dark';
  reset = false;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.createForm();
  }

  ngOnInit() {

    if (this.job) {

      this.editingState = true;

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

  onSubmitHandler() {
    const job: Job = this.form.value;
    this.onSubmit.emit(job);
  }

  resetFormValues() {
    // the expiry field needs to be an string, and not a null value
    this.form.reset({expiry: ''});
  }

  get formStatus(): boolean {
    return this.form.valid;
  }
}
