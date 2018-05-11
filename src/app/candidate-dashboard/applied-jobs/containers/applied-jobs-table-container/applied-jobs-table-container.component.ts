import { Component, OnInit } from '@angular/core';
import { CandidateUserService } from '../../../../core/services/candidate-user.service';

@Component({
  selector: 'app-applied-jobs-table-container',
  templateUrl: './applied-jobs-table-container.component.html',
  styleUrls: ['./applied-jobs-table-container.component.scss']
})
export class AppliedJobsTableContainerComponent implements OnInit {

  jobs$ = this.candidateUserService.getJobs();

  constructor(private candidateUserService: CandidateUserService) { }

  ngOnInit() {
  }
}
