import { Component, Input, OnInit } from '@angular/core';
import { UserAuth } from '../../../log-in/shared/user-auth.interface';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  @Input()
  userInfo: UserAuth;

  headerStyle = 'transparent';

  constructor() { }

  ngOnInit() { }

  get userIsUnLogged() {
    return !this.userInfo;
  }
}
