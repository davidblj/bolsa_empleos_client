import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  @Output()
  select = new EventEmitter<string>();

  jobs = [{
    id: 1,
    name: 'Wev developer',
    owner: 'Google',
    salary: '350k'
  }];

  onSelect(id: string) {
    this.select.emit(id);
  }
}
