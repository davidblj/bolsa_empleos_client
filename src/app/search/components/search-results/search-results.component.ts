import { Component, Input, OnInit } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input()
  jobs: JobSnippet[];

  currentJobId: string;

  constructor() { }

  ngOnInit() { }

  onSelect(id: string) {
    this.currentJobId = id;
  }
}
