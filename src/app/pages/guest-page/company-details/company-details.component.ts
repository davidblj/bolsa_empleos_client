import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { CompanyService } from '../../../services/organizacion/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  companyDetails;

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService) { }

  ngOnInit() {

    const companies = this.route.params.switchMap((params: Params) => {
        return this.companyService.getCompanyDetails(params['companyName']);
    });

    companies.subscribe((companyName) => {
      console.log(companyName);
    })
  }

}
