import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Error } from '../../error.interface';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnChanges  {

  @Input()
  warnings: Error[];

  @Input()
  status: boolean;

  @ViewChild('popover')
  popover: NgbPopover;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('status changed: ', changes.status.currentValue);
    const status = changes.status;
    status.currentValue ? this.popover.open() : this.popover.close();
  }
}
