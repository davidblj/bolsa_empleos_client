import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  template: ``
})
export class StepperComponent {

  @Input()
  step;

  steps;

  isSelected(step: number): boolean {
    return step === this.step;
  }
}
