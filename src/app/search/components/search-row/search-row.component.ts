import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-row',
  templateUrl: './search-row.component.html',
  styleUrls: ['./search-row.component.scss']
})
export class SearchRowComponent {

  highlight = false;

  @Input()
  job;

  @Output()
  select = new EventEmitter<string>();

  onClick() {
    this.select.emit(this.job.id);
    this.highlight = !this.highlight;
  }

  get status() {
    return this.highlight;
  }
}
