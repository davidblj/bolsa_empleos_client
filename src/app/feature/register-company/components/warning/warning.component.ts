import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Error } from '../../error.interface';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnChanges {

  @Input()
  warnings: Error[];

  @Input()
  status: boolean;

  @ViewChild('popover')
  popover: NgbPopover;

  ngOnChanges(changes: SimpleChanges): void {
    const status = changes.status;

    if (status.currentValue) {
      this.popover.open();
    } else {
      this.popover.close();
    }
  }
}
