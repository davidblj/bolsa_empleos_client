import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.class';

@Component({
  selector: 'app-search-row',
  templateUrl: './search-row.component.html',
  styleUrls: ['./search-row.component.scss']
})
export class SearchRowComponent implements OnInit {

  highlight = false;

  @Input()
  job: JobSnippet;

  @Input()
  currentId: string;

  @Output()
  select = new EventEmitter<string>();

  rowId: string;

  ngOnInit() {
    this.rowId = this.job.id;
  }

  onClick() {
    this.select.emit(this.rowId);
    this.highlight = !this.highlight;
  }

  get status() {
    return this.rowId === this.currentId;
  }
}
