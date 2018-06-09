import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeWelcomeComponent } from './components/home-welcome/home-welcome.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HomeFeatureComponent } from './components/home-feature/home-feature.component';
import { SharedModule } from '../shared/shared.module';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeHeaderContainerComponent } from './containers/home-header-container/home-header-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HomeWelcomeComponent,
    HomeInfoComponent,
    HomeFeaturesComponent,
    HomeFeatureComponent,
    HomeFooterComponent,
    HomeSearchComponent,
    HomeHeaderComponent,
    HomeHeaderContainerComponent
  ]
})
export class HomeModule { }
