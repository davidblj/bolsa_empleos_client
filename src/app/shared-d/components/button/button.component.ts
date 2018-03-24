import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

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
