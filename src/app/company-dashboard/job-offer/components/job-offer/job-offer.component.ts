import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit {

  jobNameField = 'Nombre de la oferta';
  jobNamePlaceHolder = 'describe el titulo por el cual tu estas contratando';

  jobDescriptionField = 'Describe tu oferta';
  jobDescriptionType = 'text-area';

  jobTypeField = 'Modalidad de la oferta';
  jobTypePlaceHolder = 'tipo';
  jobTypeOptions = [
    'Practicas',
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

  jobSalaryField = 'Salario (opcional)';
  jobSalaryPlaceHolder = 'cuanto paga la posicion';

  jobExpiryField = 'Hasta que dia recibes las hojas de vida';
  jobExpiryPlaceHolder = 'vigencia';

  buttonShape = 'square';
  buttonColor = 'dark';

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      expiry: ['', Validators.required],
      to: ['', Validators.required],
      type: ['', Validators.required],
      salary: ['']
    })
  }
}
