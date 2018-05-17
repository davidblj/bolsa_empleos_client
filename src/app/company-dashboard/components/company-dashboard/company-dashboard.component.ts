import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // do load automatically the first module if a
    // route has not been specified
    const children = this.activatedRoute.children;
    if (children.length === 0) {
      this.router.navigate(['empresas', 'ofertas'], {replaceUrl: true});
    }
  }
}
