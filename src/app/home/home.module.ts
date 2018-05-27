import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeWelcomeComponent } from './components/home-welcome/home-welcome.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, HomeWelcomeComponent]
})
export class HomeModule { }
