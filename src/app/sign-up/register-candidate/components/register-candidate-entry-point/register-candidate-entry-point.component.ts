import { Component } from '@angular/core';

@Component({
  selector: 'app-register-candidate-entry-point',
  templateUrl: './register-candidate-entry-point.component.html',
  styleUrls: ['./register-candidate-entry-point.component.scss']
})
export class RegisterCandidateEntryPointComponent {

  size = 'small';
  currentStep = 1;

  onNextStep() {
    this.currentStep++;
  }

}
