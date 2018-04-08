import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInFieldComponent } from './components/log-in-field/log-in-field.component';
import { LogInFormContainerComponent } from './containers/log-in-form-container/log-in-form-container.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { SharedDModule } from '../../shared-d/shared-d.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { AutoFocusDirective } from './shared/auto-focus.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/auth.service';
import { LogInFormFooterComponent } from './components/log-in-form-footer/log-in-form-footer.component';

// ng g component feature/log-in/components -m feature/log-in/log-in.module.ts

@NgModule({
  imports: [
    CommonModule,
    SharedDModule,
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
  ],
  providers: [AuthService]
})
export class LogInModule { }
