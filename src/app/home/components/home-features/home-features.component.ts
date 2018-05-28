import { Component, OnInit } from '@angular/core';
import { Feature } from '../../shared/feature.interface';
import { features } from './data';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent implements OnInit {

  features: Feature[];

  constructor() {
    this.features = features;
  }

  ngOnInit() { }
}
