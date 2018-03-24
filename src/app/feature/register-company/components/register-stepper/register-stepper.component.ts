import { Component } from '@angular/core';
import { StepperComponent } from '../../../../shared-d/components/stepper/stepper.component';

@Component({
  selector: 'app-register-stepper',
  templateUrl: './register-stepper.component.html',
  styleUrls: ['./register-stepper.component.scss']
})
export class RegisterStepperComponent extends StepperComponent {

  steps = [1, 2, 3];

}
