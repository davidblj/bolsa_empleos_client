import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-info',
  templateUrl: './register-info.component.html',
  styleUrls: ['./register-info.component.scss']
})
export class RegisterInfoComponent implements OnInit {

  currentStep = 1;

  constructor() { }

  ngOnInit() {
  }

}
