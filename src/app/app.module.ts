
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { FeatureModule } from './feature/feature.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FeatureModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
