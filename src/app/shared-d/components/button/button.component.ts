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
  next = new EventEmitter<any>();

  submit() {
    this.next.emit();
  }

}
