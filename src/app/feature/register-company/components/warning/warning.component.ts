import { Component, Input } from '@angular/core';
import { Error } from '../../../../shared-d/interfaces/error.interface';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent {

  @Input()
  warnings: Error[];

  @Input()
  focus: boolean;
}
