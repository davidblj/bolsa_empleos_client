import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  // set any value to none if you
  // don't want to apply those
  // styles

  @Input()
  enabled = true;

  @Input()
  shape = 'circular';

  @Input()
  color = 'transparent';

  @Input()
  hoverColor = 'dark';

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

  getHoverColor(hoverColor: string) {
    return hoverColor === this.hoverColor;
  }
}
