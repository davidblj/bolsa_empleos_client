import { Component } from '@angular/core';
import { SubmitStatus } from '../../../shared/submit-status.interface';
import { RegisterService } from '../../shared/register.service';
import { failure, success } from '../../../shared/data';

@Component({
  selector: 'app-register-candidate-entry-point',
  templateUrl: './register-candidate-entry-point.component.html',
  styleUrls: ['./register-candidate-entry-point.component.scss']
})
export class RegisterCandidateEntryPointComponent {

  size = 'small';
  currentStep = 1;
  submitStatusData: SubmitStatus;

  constructor(private registerService: RegisterService) {
  }

  onNextStep() {

    this.currentStep++;

    if (this.currentStep > 3) {
      this.setSubmitStatusData();
    }
  }

  setSubmitStatusData() {

    const status = this.registerService.responseStatus;

    if (status) {
      this.submitStatusData = success;
    } else {
      this.submitStatusData = failure;
    }
  }
}
