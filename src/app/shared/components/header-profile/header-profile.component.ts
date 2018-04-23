import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent {

  @Input()
  username: string;

  @Input()
  insignia: string;
}
