
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { CompanyDashboardModule } from './company-dashboard/company-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CompanyDashboardModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
