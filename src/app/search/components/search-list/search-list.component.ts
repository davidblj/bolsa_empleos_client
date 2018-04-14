import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  @Output()
  select = new EventEmitter<string>();

  @Input()
  jobs: JobSnippet[];

  currentId: string;

  onSelect(id: string) {
    this.currentId = id;
    this.select.emit(id);
  }
}
