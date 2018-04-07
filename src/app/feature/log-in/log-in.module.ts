import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInFieldComponent } from './components/log-in-field/log-in-field.component';
import { LogInFormContainerComponent } from './containers/log-in-form-container/log-in-form-container.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { SharedDModule } from '../../shared-d/shared-d.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { AutoFocusDirective } from './shared/auto-focus.directive';

// ng g component feature/log-in/components -m feature/log-in/log-in.module.ts

@NgModule({
  imports: [
    CommonModule,
    SharedDModule
  ],
  exports: [
    LogInComponent
  ],
  declarations: [
    LogInComponent,
    LogInFieldComponent,
    LogInFormComponent,
    LogInFormContainerComponent,
    AutoFocusDirective
  ]
})
export class LogInModule { }
