import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-dashboard-panel',
  templateUrl: './company-dashboard-panel.component.html',
  styleUrls: ['./company-dashboard-panel.component.scss']
})
export class CompanyDashboardPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(route: string) {
    route = `empresas/${route}`;
    this.router.navigate([route]);
  }
}
