import { Component, OnInit } from '@angular/core';
import { CandidateUserService } from '../../../core/services/candidate-user.service';

@Component({
  selector: 'app-search-notification-container',
  templateUrl: './search-notification-container.component.html',
  styleUrls: ['./search-notification-container.component.scss']
})
export class SearchNotificationContainerComponent implements OnInit {

  appliedJobsCounter;

  constructor(private candidateUserService: CandidateUserService) { }

  ngOnInit() {

    this.candidateUserService.appliedJobs$
      .subscribe(value => {
        this.appliedJobsCounter = value.length;
      })
  }
}
