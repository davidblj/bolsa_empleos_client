import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss']
})
export class CandidateDashboardComponent implements OnInit {

  OFERTAS = 'Ofertas';
  PERFIL = 'Perfil';

  links;
  panelPosition = 'center';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getPanelLinks();
    this.setRedirection();
  }

  getPanelLinks() {
    this.links = [this.OFERTAS, this.PERFIL];
  }

  setRedirection() {

    // do load automatically the first module if a
    // route has not been specified
    const children = this.activatedRoute.children;
    if (children.length === 0) {
      this.router.navigate(['candidatos', 'ofertas']);
    }
  }

  onLinkChangedHandler(name: string) {

    if (name === this.OFERTAS) {
      this.router.navigate(['ofertas'], {relativeTo: this.activatedRoute});
    }

    if (name === this.PERFIL) {
      this.router.navigate(['perfil'], {relativeTo: this.activatedRoute});
    }
  }
}
