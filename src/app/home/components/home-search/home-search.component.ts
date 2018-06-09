import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  buttonShape = 'square';
  buttonColor = 'gray';
  buttonHoverColor = 'black';

  searchInput = new FormControl();

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmitHandler() {
    this.dataService.search = this.searchInput.value;
    this.router.navigate(['./buscar']);
  }
}
