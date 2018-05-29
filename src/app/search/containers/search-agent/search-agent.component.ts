import { Component, OnInit } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';

// services
import { SearchJobsService } from '../../shared/search-jobs.service';
import { CandidateUserService } from '../../../core/services/candidate-user.service';
import { JobSearch } from '../../shared/job-search-interface';
import { Query } from '../../shared/query.interface';
import { JobService } from '../../../core/services/job.service';

@Component({
  selector: 'app-search-agent',
  templateUrl: './search-agent.component.html',
  styleUrls: ['./search-agent.component.scss']
})
export class SearchAgentComponent implements OnInit {

  jobs: JobSnippet[];
  pageLimit;

  // pagination variables
  currentId;
  pageSize = 12;
  loading: boolean;

  constructor(private searchJobsService: SearchJobsService,
              private candidateUserService: CandidateUserService) { }

  ngOnInit() {
    this.candidateUserService.getJobs()
      .subscribe(() => {
        this.getFirstPage(null);
      });
  }

  onPageChanged(offset: number) {
    this.getNewPage(offset);
  }

  onQueryHandler(query: Query) {
    this.getFirstPage(query);
  }

  getFirstPage(query: Query) {
    this.currentId = null;
    this.searchJobs(null, query);
  }

  getNewPage(offset) {
    this.searchJobs(offset, null);
  }

  searchJobs(offset, query: Query) {

    this.loading = true;
    this.searchJobsService.getJobs(this.currentId, offset, this.pageSize, query)
      .subscribe((jobSearch: JobSearch) => {

        this.jobs = jobSearch.items;
        this.pageLimit = (jobSearch.total_count / this.pageSize);
        this.currentId = this.jobs[0]._id;
        this.loading = false;
      });
  }
}
