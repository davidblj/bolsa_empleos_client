import { Component, Input } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  @Input()
  jobs: JobSnippet[];

  currentJobId: string;
  paginatorType = 'small';

  onSelect(id: string) {
    this.currentJobId = id;
  }
}
