import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeWelcomeComponent } from './components/home-welcome/home-welcome.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HomeFeatureComponent } from './components/home-feature/home-feature.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HomeWelcomeComponent,
    HomeInfoComponent,
    HomeFeaturesComponent,
    HomeFeatureComponent
  ]
})
export class HomeModule { }
