import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Roles } from '../../../shared/utils/globals.variables';

@Component({
  selector: 'app-search-header-container',
  templateUrl: './search-header-container.component.html',
  styleUrls: ['./search-header-container.component.scss']
})
export class SearchHeaderContainerComponent implements OnInit {

  username: string;
  insignia: Roles | string;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.getSessionInformation();
  }

  getSessionInformation() {

    const userInfo = this.authService.getUser();

    if (!userInfo) {
      return
    }

    const role = userInfo.role;

    if (role === Roles.Graduate || role === Roles.Student) {
      this.username = userInfo.name;
      this.insignia = userInfo.role;
    }

    if (role === Roles.Company) {
      this.username = userInfo.admin;
      this.insignia = userInfo.name;
    }
  }

}
