import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-dashboard-header',
  templateUrl: './candidate-dashboard-header.component.html',
  styleUrls: ['./candidate-dashboard-header.component.scss']
})
export class CandidateDashboardHeaderComponent {

  @Input()
  username;

  @Input()
  insignia;

  constructor(private router: Router) {
  }

  onSearchClick() {
    this.router.navigate(['/buscar']);
  }
}
