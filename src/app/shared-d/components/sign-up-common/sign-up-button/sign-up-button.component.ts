import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up-button',
  templateUrl: './sign-up-button.component.html',
  styleUrls: ['./sign-up-button.component.scss']
})
export class SignUpButtonComponent {

  @Input()
  enabled: boolean;

  @Output()
  submit = new EventEmitter<any>();

  onClick() {

    // this.submit.emit();
    if (this.enabled) {
      this.submit.emit();
    }
  }
}
