import { Component, OnInit } from '@angular/core';
import { Option } from '../../shared/option.interface';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  typeCategory = 'Tipo';
  typeCategoryOptions: Option[] = [
    {name: 'Tiempo Completo', selected: false },
    {name: 'Tiempo Medio', selected: false },
    {name: 'Contrato', selected: false },
    {name: 'Temporal', selected: false },
  ];

  audienceCategory = 'Audiencia';
  audienceCategoryOptions: Option[] = [
    {name: 'Practicantes', selected: false },
    {name: 'Egresados', selected: false },
    {name: 'Ambos', selected: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
