import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@ Component({
  selector: 'app-log-in-field',
  templateUrl: './log-in-field.component.html',
  styleUrls: ['./log-in-field.component.scss']
})
export class LogInFieldComponent {


  @Input()
  control: AbstractControl;

  @Input()
  placeholder = '';

  // text (default) or password
  @Input()
  type = 'text';

  @Input()
  autoFocus = false;

  @Input()
  iconSource = '';
}
