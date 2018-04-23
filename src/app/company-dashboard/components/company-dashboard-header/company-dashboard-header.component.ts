import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-dashboard-header',
  templateUrl: './company-dashboard-header.component.html',
  styleUrls: ['./company-dashboard-header.component.scss']
})
export class CompanyDashboardHeaderComponent {

  @Input()
  username;

  @Input()
  insignia;
}
