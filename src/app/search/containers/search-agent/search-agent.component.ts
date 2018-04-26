import { Component, OnInit } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';

// services
import { SearchJobsService } from '../../shared/search-jobs.service';
import { CandidateUserService } from '../../../core/services/candidate-user.service';
import { JobSearch } from '../../shared/job-search-interface';

@Component({
  selector: 'app-search-agent',
  templateUrl: './search-agent.component.html',
  styleUrls: ['./search-agent.component.scss']
})
export class SearchAgentComponent implements OnInit {

  jobs: JobSnippet[];
  pageLimit;

  // pagination variables
  currentId = null;
  pageSize = 5;
  loading;

  constructor(private searchJobsService: SearchJobsService,
              private candidateUserService: CandidateUserService) { }

  ngOnInit() {

    // since we are getting the applied status
    // after a job is received (row and apply
    // components), we must ensure that the
    // applied jobs are already stored
    this.candidateUserService.getJobs()
      .subscribe(() => {
        this.searchJobs(null);
      });
  }

  searchJobs(offset) {

    this.loading = true;

    this.searchJobsService.getJobs(this.currentId, offset, this.pageSize)
      .subscribe((jobSearch: JobSearch) => {

        this.jobs = jobSearch.items;
        this.pageLimit = (jobSearch.total_count / this.pageSize);
        this.currentId = this.jobs[0]._id;
        this.loading = false;
      });
  }


  onPageChanged(offset: number) {
    this.searchJobs(offset);
  }
}
