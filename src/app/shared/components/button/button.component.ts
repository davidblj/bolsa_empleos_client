import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  enabled = true;

  @Input()
  shape = 'circular';

  @Input()
  color = 'transparent';

  @Input ()
  animated = false;

  @Output()
  submit = new EventEmitter<any>();

  onClick() {

    if (this.enabled) {
      this.submit.emit();
    }
  }

  getShapeStatus(shape: string) {
    return shape === this.shape;
  }

  getColorStatus(color: string) {
    return color === this.color;
  }
}
