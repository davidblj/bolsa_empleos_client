import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-candidate-dashboard-header-container',
  templateUrl: './candidate-dashboard-header-container.component.html',
  styleUrls: ['./candidate-dashboard-header-container.component.scss']
})
export class CandidateDashboardHeaderContainerComponent implements OnInit {

  username: string;
  insignia: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getSessionInformation();
  }

  getSessionInformation() {
    const userInfo = this.authService.getUser();
    this.username = userInfo.name;
    this.insignia = userInfo.role;
  }
}
