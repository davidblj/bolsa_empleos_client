import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-session',
  templateUrl: './header-session.component.html',
  styleUrls: ['./header-session.component.scss']
})
export class HeaderSessionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSignUpClick() {
    this.router.navigate(['/registro']);
  }

  onLogInClick() {
    this.router.navigate(['/ingresar']);
  }
}
