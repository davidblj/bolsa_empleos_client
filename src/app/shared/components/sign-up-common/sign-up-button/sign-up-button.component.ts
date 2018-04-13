import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up-button',
  templateUrl: './sign-up-button.component.html',
  styleUrls: ['./sign-up-button.component.scss']
})
export class SignUpButtonComponent {

  @Input()
  enabled = false;

  @Output()
  submit = new EventEmitter<any>();

  buttonColor = 'dark';

  onClick() {

    if (this.enabled) {
      this.submit.emit();
    }
  }
}
