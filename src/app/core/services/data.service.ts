import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  searchQuery;

  constructor() { }

  set search(inputValue: string) {
    this.searchQuery = inputValue;
  }
}
