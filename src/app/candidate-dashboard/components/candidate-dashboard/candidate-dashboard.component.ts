import { Component, OnInit } from '@angular/core';
import { Link } from '../../../shared/interfaces/link.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss']
})
export class CandidateDashboardComponent implements OnInit {

  links: Link[];
  panelPosition = 'center';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getPanelLinks();
    this.setRedirection();
  }

  getPanelLinks() {
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
      }];
  }

  setRedirection() {

    // do load automatically the first module if a
    // route has not been specified
    const children = this.activatedRoute.children;
    if (children.length === 0) {
      this.router.navigate(['candidatos', 'ofertas']);
    }
  }
}
