import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../../../shared/interfaces/job.interface';

@Component({
  selector: 'app-job-offer-container',
  templateUrl: './job-offer-container.component.html',
  styleUrls: ['./job-offer-container.component.scss']
})
export class JobOfferContainerComponent implements OnInit {

  job: Job;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(
      (data: {jobOffer: Job}) => {
        this.job = data.jobOffer;
      })
  }

  ngOnInit() {
  }
}
