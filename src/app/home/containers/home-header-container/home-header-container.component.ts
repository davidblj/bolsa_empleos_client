import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { UserAuth } from '../../../log-in/shared/user-auth.interface';

@Component({
  selector: 'app-home-header-container',
  templateUrl: './home-header-container.component.html',
  styleUrls: ['./home-header-container.component.scss']
})
export class HomeHeaderContainerComponent implements OnInit {

  userInfo: UserAuth | null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getSessionInformation();
  }

  getSessionInformation() {
    this.userInfo = this.authService.getUser();
  }
}
