import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-search-header-container',
  templateUrl: './search-header-container.component.html',
  styleUrls: ['./search-header-container.component.scss']
})
export class SearchHeaderContainerComponent implements OnInit {

  username: string;
  insignia: string;

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
        this.insignia = 'Estudiante';
        break;

      case 'graduate':
        this.username = userInfo.name;
        this.insignia = 'Egresado';
        break;

      case 'company':
        this.username = userInfo.admin;
        this.insignia = userInfo.name;
        break;
    }
  }

}
