import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-company-dashboard-panel',
  templateUrl: './company-dashboard-panel.component.html',
  styleUrls: ['./company-dashboard-panel.component.scss']
})
export class CompanyDashboardPanelComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
    console.log(this.currentRoute);
  }

  onClick(route: string) {

    route = `/empresas/${route}`;
    this.router.navigate([route]).then(
      () => {
        this.currentRoute = route;
      });
  }

  logOut() {
    this.authService.logOut();
  }

  isActive(route: string): boolean {
    return this.currentRoute === `/empresas/${route}`
  }
}
