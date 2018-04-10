
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { FeatureModule } from './feature/feature.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SignUpModule } from './sign-up/sign-up.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    SignUpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
