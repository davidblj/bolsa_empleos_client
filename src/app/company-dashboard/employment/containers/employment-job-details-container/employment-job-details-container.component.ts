import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobCandidates } from '../../shared/job-candidate.interface';

@Component({
  selector: 'app-employment-job-details-container',
  templateUrl: './employment-job-details-container.component.html',
  styleUrls: ['./employment-job-details-container.component.scss']
})
export class EmploymentJobDetailsContainerComponent implements OnInit {

  amount: number;

  constructor(private route: ActivatedRoute) {

    this.route.data.subscribe(
      (data: {jobDetails: JobCandidates}) => {
        this.amount = data.jobDetails.amount;
      })
  }

  ngOnInit() {
    console.log('amoun on container' , this.amount);
  }
}
