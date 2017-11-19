import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/guest/search.service';

@Component({
  selector: 'app-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.scss']
})
export class ApplicantDashboardComponent implements OnInit {

  offers;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getAllAvailableOffers().subscribe(
      (offers) => {
        this.offers = offers;
      }
    )
  }

}
