import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-card',
  templateUrl: './sign-up-card.component.html',
  styleUrls: ['./sign-up-card.component.scss']
})
export class SignUpCardComponent {

  @Input()
  size: string;

  @Input()
  shape: string;

  getCardType(type) {

    if (this.size === type) {
      return true;
    }
  }

  getCardShape(shape) {

    if (this.shape === shape) {
      return true;
    }
  }
}
