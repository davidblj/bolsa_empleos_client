import { Component, Input } from '@angular/core';
import { Error } from '../../interfaces/error.interface';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {

  @Input()
  warnings: Error[];
}
