import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent {

  @Input()
  username: string;

  @Input()
  insignia: string;

  constructor() {}

  get notificationStatus() {
    return (
      this.insignia === 'Estudiante' ||
      this.insignia === 'Graduado');
  }
}
