import { Component, OnInit } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';
import { SearchJobsService } from '../../shared/search-jobs.service';
import { CandidateUserService } from '../../../core/services/candidate-user.service';
import { JobSearch } from '../../shared/job-search-interface';
import { Query } from '../../shared/query.interface';
import { AuthService } from '../../../core/services/auth.service';
import { APPRENTICE, BOTH, GRADUATE, Roles, STUDENT } from '../../../shared/utils/globals.variables';
import { DataService } from '../../../core/services/data.service';

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
              private candidateUserService: CandidateUserService,
              private dataService: DataService,
              private authService: AuthService) { }

  ngOnInit() {
    this.candidateUserService.getJobs()
      .subscribe(() => {
        this.getFirstPage(this.setDefaultAudienceQuery());
      });
  }

  onPageChanged(offset: number) {
    this.getNewPage(offset);
  }

  onQueryHandler(query: Query[]) {
    this.getFirstPage(query);
  }

  getFirstPage(query: Query[]) {
    this.currentId = null;
    this.searchJobs(null, query);
  }

  getNewPage(offset) {
    this.searchJobs(offset, null);
  }

  setDefaultAudienceQuery(): Query[] | null {

    const defaultQuery: Query[] = [];
    const audienceQuery = this.getDefaultAudienceQuery();

    if (audienceQuery) {
      defaultQuery.push(audienceQuery);
    }

    const searchInputQuery = this.getDefaultSearchInputQuery();

    if (searchInputQuery) {
      defaultQuery.push(searchInputQuery);
    }

    return defaultQuery.length > 0 ? defaultQuery : null;
  }

  getDefaultAudienceQuery(): Query | null {

    const userRole = this.authService.getRole();
    let value;

    if (!userRole) {
      return null;
    }

    if (userRole === Roles.Graduate) {
      value = `${GRADUATE},${BOTH}`;
    }

    if (userRole === Roles.Student) {
      value = `${APPRENTICE},${BOTH}`;
    }

    return {
      name: 'audience',
      value: value
    }
  }

  getDefaultSearchInputQuery(): Query | null {

    const searchQuery = this.dataService.searchQuery;

    if (searchQuery) {
      return {name: 'search', value: searchQuery};
    }
    return null;
  }

  searchJobs(offset, query: Query[]) {

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
