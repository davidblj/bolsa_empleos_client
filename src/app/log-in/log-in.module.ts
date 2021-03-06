import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

// components
import { LogInFieldComponent } from './components/log-in-field/log-in-field.component';
import { LogInFormContainerComponent } from './containers/log-in-form-container/log-in-form-container.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AutoFocusDirective } from './shared/auto-focus.directive';
import { LogInFormFooterComponent } from './components/log-in-form-footer/log-in-form-footer.component';
import { LogInRoutingModule } from './log-in-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LogInRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    LogInComponent
  ],
  declarations: [
    LogInComponent,
    LogInFieldComponent,
    LogInFormComponent,
    LogInFormContainerComponent,
    AutoFocusDirective,
    LogInFormFooterComponent
  ]
})

export class LogInModule { }
