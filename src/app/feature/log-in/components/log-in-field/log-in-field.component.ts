import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-log-in-field',
  templateUrl: './log-in-field.component.html',
  styleUrls: ['./log-in-field.component.scss']
})
export class LogInFieldComponent {

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
