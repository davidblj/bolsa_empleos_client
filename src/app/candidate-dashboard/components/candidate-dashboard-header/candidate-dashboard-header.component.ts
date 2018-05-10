import { Component, Input } from '@angular/core';

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
}
