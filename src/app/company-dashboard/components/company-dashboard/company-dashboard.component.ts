import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    // do load automatically the first module
    this.router.navigate(['empresas', 'ofertas']);
  }
}
