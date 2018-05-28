import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../shared/feature.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-feature',
  templateUrl: './home-feature.component.html',
  styleUrls: ['./home-feature.component.scss']
})
export class HomeFeatureComponent implements OnInit {

  @Input()
  feature: Feature;

  buttonShape = 'square';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
