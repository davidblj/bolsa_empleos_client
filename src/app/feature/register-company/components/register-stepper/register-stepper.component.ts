import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-stepper',
  templateUrl: './register-stepper.component.html',
  styleUrls: ['./register-stepper.component.scss']
})
export class RegisterStepperComponent {

  @Input()
  step;

  steps = [1, 2, 3];

  isSelected(step: number): boolean {
    return step === this.step;
  }
}
