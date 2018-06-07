import { Component, OnInit } from '@angular/core';
import { CandidateUserService } from '../../../../core/services/candidate-user.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AppliedJobsModalComponent } from '../../components/applied-jobs-modal/applied-jobs-modal.component';

@Component({
  selector: 'app-applied-jobs-table-container',
  templateUrl: './applied-jobs-table-container.component.html',
  styleUrls: ['./applied-jobs-table-container.component.scss']
})
export class AppliedJobsTableContainerComponent implements OnInit {

  jobs$ = this.candidateUserService.getJobs();

  constructor(private candidateUserService: CandidateUserService,
              private modalService: BsModalService) { }

  ngOnInit() {
  }
}
