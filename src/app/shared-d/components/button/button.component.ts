import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  enabled = true;

  @Output()
  submit = new EventEmitter<any>();

  onClick() {

    if (this.enabled) {
      this.submit.emit();
    }
  }

}
