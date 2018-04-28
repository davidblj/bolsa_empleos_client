import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// interfaces
import { JobCandidates } from '../../shared/job-candidate.interface';
import { Candidate } from '../../shared/candidate.interface';
import { CompanyUserService } from '../../../../core/services/company-user.service';

@Component({
  selector: 'app-employment-job-details-container',
  templateUrl: './employment-job-details-container.component.html',
  styleUrls: ['./employment-job-details-container.component.scss']
})
export class EmploymentJobDetailsContainerComponent {

  amount: number;
  candidates: Candidate[];

  constructor(private route: ActivatedRoute,
              private companyUserService: CompanyUserService) {

    this.route.data.subscribe(
      (data: {jobDetails: JobCandidates}) => {

        this.amount = data.jobDetails.amount;
        this.candidates = data.jobDetails.users;
      })
  }

  onDownload(candidate: Candidate) {
    this.companyUserService.getCV(candidate);
  }
}
