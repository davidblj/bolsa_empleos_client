import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit {

  jobNameField = 'Nombre de la oferta';

  jobDescriptionField  = 'Describe tu oferta';
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

  constructor() { }

  ngOnInit() {
  }
}
