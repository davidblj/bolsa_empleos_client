import { Component, OnInit } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';
import { SearchJobsService } from '../../shared/search-jobs.service';

@Component({
  selector: 'app-search-agent',
  templateUrl: './search-agent.component.html',
  styleUrls: ['./search-agent.component.scss']
})
export class SearchAgentComponent implements OnInit {

  jobs: JobSnippet[];

  constructor(private searchJobsService: SearchJobsService) { }

  ngOnInit() {

    this.searchJobsService.getJobs(null, null)
      .subscribe((jobs: JobSnippet[]) => {
        this.jobs = jobs;
      });
  }
}
