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
  onLinkChanged = new EventEmitter<Link>();

  constructor() {}

  ngOnInit() {}

  getPositionStatus(position: string) {
    return position === this.panelPosition;
  }

  emitLink(link: Link) {
    this.onLinkChanged.emit(link);
    console.log(link);
  }
}
