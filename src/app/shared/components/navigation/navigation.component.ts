import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input()
  links;

  @Input()
  panelPosition = 'left';

  @Input()
  currentTab;

  @Output()
  onLinkChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    if (!this.currentTab) {
      this.currentTab = this.links[0];
    }
  }

  getPositionStatus(position: string) {
    return position === this.panelPosition;
  }

  navigateTo(name: string) {
    this.onLinkChanged.emit(name);
    this.currentTab = name;
  }

  isActive(tabName: string) {
    return this.currentTab === tabName;
  }
}
