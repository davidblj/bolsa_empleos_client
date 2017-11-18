import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { CompanyService } from '../../../services/organizacion/company.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  company: any = {};
  jobs;
  totalJobs;

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService,
              private location: Location) { }

  ngOnInit() {

    const companies = this.route.params.switchMap((params: Params) => {
        return this.companyService.getCompanyDetails(params['companyName']);
    });

    companies.subscribe((company) => {
      this.company = company.company;
      this.jobs = company.jobs;
      this.totalJobs = this.jobs.length;
    });
  }

  goBack() {
    this.location.back();
  }
}
