import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeWelcomeComponent } from './components/home-welcome/home-welcome.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, HomeWelcomeComponent, HomeInfoComponent]
})
export class HomeModule { }
