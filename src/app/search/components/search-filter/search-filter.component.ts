import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Option } from '../../shared/option.interface';
import { Query } from '../../shared/query.interface';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  @Output()
  onQuery = new EventEmitter<Query[]>();

  // todo: create a new class
  typeCategory = 'Tipo';
  typeCategoryOptions: Option[] = [
    {name: 'Tiempo Completo', selected: false },
    {name: 'Tiempo Medio', selected: false },
    {name: 'Contrato', selected: false },
    {name: 'Temporal', selected: false },
  ];

  constructor() {}

  ngOnInit() {}

  onFilterSetHandler(value: string, queryName: string) {

    const query: Query[] = [];
    const queryItem: Query = {name: queryName, value: value};
    query.push(queryItem);

    this.onQuery.emit(query);
  }
}
