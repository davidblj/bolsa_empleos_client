import { Component, Input, OnInit } from '@angular/core';
import { UserAuth } from '../../../log-in/shared/user-auth.interface';
import { Router } from '@angular/router';
import { Roles } from '../../../shared/utils/globals.variables';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  @Input()
  userInfo: UserAuth;

  headerStyle = 'transparent';
  buttonShape = 'square';

  constructor(private router: Router) { }

  ngOnInit() { }

  get userIsUnLogged() {
    return !this.userInfo;
  }

  onSubmitHandler() {

    if (this.userInfo) {

      const userRole = this.userInfo.role;

      if (userRole === Roles.Student || Roles.Graduate) {
        this.router.navigate(['/candidatos']);
      }

      if (userRole === Roles.Company) {
        this.router.navigate(['/empresas']);
      }
    }
  }
}
