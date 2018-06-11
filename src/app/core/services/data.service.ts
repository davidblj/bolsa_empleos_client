import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  _searchQuery: string;
  _jobTitle: string;

  constructor() { }

  set searchQuery(inputValue: string) {
    this._searchQuery = inputValue;
  }

  set jobTitle(jobTitle: string) {
    this._jobTitle = jobTitle;
  }
}
