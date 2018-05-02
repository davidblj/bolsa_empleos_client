import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-offer-date-input',
  templateUrl: './job-offer-date-input.component.html',
  styleUrls: ['./job-offer-date-input.component.scss']
})
export class JobOfferDateInputComponent implements OnInit {

  @Input()
  fieldName: string;

  @Input()
  placeHolder = '';

  constructor() { }

  ngOnInit() {
  }

}
