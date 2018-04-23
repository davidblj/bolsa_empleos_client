import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-company-dashboard-header-container',
  templateUrl: './company-dashboard-header-container.component.html',
  styleUrls: ['./company-dashboard-header-container.component.scss']
})
export class CompanyDashboardHeaderContainerComponent implements OnInit {

  username: string;
  insignia: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getSessionInformation();
  }

  getSessionInformation() {

    const userInfo = this.authService.getUser();

    this.username = userInfo.admin;
    this.insignia = userInfo.name;
  }
}
