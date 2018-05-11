import { Component, OnInit } from '@angular/core';
import { Link } from '../../../shared/interfaces/link.interface';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss']
})
export class CandidateDashboardComponent implements OnInit {

  links: Link[];
  panelPosition = 'center';

  ngOnInit() {

    this.links = [
      {
        name: 'Ofertas',
        status: true,
        link: ''
      },
      {
        name: 'Configuracion',
        status: false,
        link: ''
      }]
  }
}
