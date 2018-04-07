import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {

  usernamePlaceholder = 'usuario';
  usernameIconSource = 'assets/avatar.svg';
  usernameAutoFocus = true;

  passwordPlaceholder = 'contraseña';
  passwordIconSource = 'assets/padlock.svg';
  passwordType = 'password';

  constructor() { }

  ngOnInit() {
  }

}
