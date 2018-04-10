import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-side-pane',
  templateUrl: './register-side-pane.component.html',
  styleUrls: ['./register-side-pane.component.scss']
})
export class RegisterSidePaneComponent {

  @Input()
  step: number;

}
