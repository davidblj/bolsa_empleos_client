import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment-job-details-header',
  templateUrl: './employment-job-details-header.component.html',
  styleUrls: ['./employment-job-details-header.component.scss']
})
export class EmploymentJobDetailsHeaderComponent implements OnInit {

  @Input()
  jobTitle: string;

  @Input()
  amount: number;

  buttonColor = 'dark';
  buttonAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
