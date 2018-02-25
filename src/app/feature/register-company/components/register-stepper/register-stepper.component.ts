import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-stepper',
  templateUrl: './register-stepper.component.html',
  styleUrls: ['./register-stepper.component.scss']
})
export class RegisterStepperComponent implements OnInit {

  currentStep = 1;
  steps = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

  isSelected(step: number): boolean {
    return step === this.currentStep;
  }
}
