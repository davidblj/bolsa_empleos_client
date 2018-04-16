import { Component, OnInit } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';

// services
import { SearchJobsService } from '../../shared/search-jobs.service';
import { CandidateUserService } from '../../../core/services/candidate-user.service';

@Component({
  selector: 'app-search-agent',
  templateUrl: './search-agent.component.html',
  styleUrls: ['./search-agent.component.scss']
})
export class SearchAgentComponent implements OnInit {

  jobs: JobSnippet[];


  // todo: pass down the 'applied jobs'. (making our row component a dumb service)
  constructor(private searchJobsService: SearchJobsService,
              private candidateUserService: CandidateUserService) { }

  ngOnInit() {

    // since we are getting the applied status
    // after a job is received (row component),
    // we must ensure that the applied jobs are
    // already stored
    this.candidateUserService.getJobs()
      .subscribe(() => {
        this.searchJobs();
      });
  }

  searchJobs() {

    this.searchJobsService.getJobs(null, null)
      .subscribe((jobs: JobSnippet[]) => {
        this.jobs = jobs;
      });
  }
}
