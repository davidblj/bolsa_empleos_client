import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/ingresar']);
  }

  get notificationStatus() {
    return (
      this.insignia === 'Estudiante' ||
      this.insignia === 'Graduado');
  }
}
