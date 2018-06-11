import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobSnippet } from '../../shared/job-snippet.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-search-row',
  templateUrl: './search-row.component.html',
  styleUrls: ['./search-row.component.scss']
})
export class SearchRowComponent implements OnInit {

  @Input()
  job: JobSnippet;

  @Input()
  currentId: string;

  @Input()
  applyingStatus: boolean;

  @Output()
  select = new EventEmitter<string>();

  baseURL = environment.baseURL;
  highlight = false;
  rowId: string;

  ngOnInit() {
    this.rowId = this.job._id;
  }

  onClick() {
    this.select.emit(this.rowId);
    this.highlight = !this.highlight;
  }

  get status() {
    return this.rowId === this.currentId;
  }

  get iconUrl() {
    return `${this.baseURL}/companies/${this.job.owner}/icon`;
  }
}
