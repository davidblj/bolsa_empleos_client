import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  @Input()
  jobs: JobSnippet[];

  @Input()
  pageLimit: number;

  @Output()
  page = new EventEmitter<number>();

  currentJobId: string;

  onSelect(id: string) {
    this.currentJobId = id;
  }

  onPageChanged(offset: number) {
    this.page.emit(offset);
  }
}
