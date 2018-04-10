
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SignUpModule } from './sign-up/sign-up.module';
import { LogInModule } from './log-in/log-in.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignUpModule,
    LogInModule,
    SearchModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
