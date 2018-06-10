import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';
import { SearchListComponent } from '../search-list/search-list.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  _jobs: JobSnippet[];

  @ViewChild(SearchListComponent)
  searchListComponent: SearchListComponent;

  @Input()
  set jobs(jobs: JobSnippet[]) {
    this.onJobsFetched(jobs);
  }

  @Input()
  pageLimit: number;

  @Input()
  loading: boolean;

  @Output()
  page = new EventEmitter<number>();

  currentJobId: string;

  onJobsFetched(jobs: JobSnippet[]) {

    this._jobs = jobs;

    if (jobs) {
      this.currentJobId = jobs[0]._id;
      this.searchListComponent.onSelect(this.currentJobId);
    }
  }

  onSelect(id: string) {
    this.currentJobId = id;
  }

  onPageChanged(offset: number) {
    this.page.emit(offset);
  }
}
