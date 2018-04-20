import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string;
  representing: string;

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

    switch (role) {

      case 'student':
        this.username = userInfo.name;
        this.representing = 'Estudiante';
        break;

      case 'graduate':
        this.username = userInfo.name;
        this.representing = 'Egresado';
        break;

      case 'company':
        this.username = userInfo.admin;
        this.representing = userInfo.name;
        break;
    }
  }
}
