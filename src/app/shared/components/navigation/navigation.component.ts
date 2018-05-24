import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// interfaces
import { Link } from '../../interfaces/link.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input()
  links: Link[];

  @Input()
  panelPosition = 'left';

  @Output()
  onLinkChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  getPositionStatus(position: string) {
    return position === this.panelPosition;
  }

  navigateTo(name: string) {
    this.onLinkChanged.emit(name);
  }
}
