import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-paginator-container',
  templateUrl: './search-paginator-container.component.html',
  styleUrls: ['./search-paginator-container.component.scss']
})
export class SearchPaginatorContainerComponent implements OnInit {

  pageLimit = 10;

  constructor() { }

  ngOnInit() {
  }
}
