import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-dashboard-panel',
  templateUrl: './company-dashboard-panel.component.html',
  styleUrls: ['./company-dashboard-panel.component.scss']
})
export class CompanyDashboardPanelComponent implements OnInit {

  currentRoute = 'ofertas';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log('snapshot', this.activatedRoute.snapshot);
  }

  onClick(route: string) {

    const baseRoute = route;
    route = `empresas/${route}`;

    this.router.navigate([route]).then(
      () => {
        this.currentRoute = baseRoute;
      });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route
  }
}
