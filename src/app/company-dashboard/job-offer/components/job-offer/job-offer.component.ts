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

  constructor() { }

  ngOnInit() {
  }
}
