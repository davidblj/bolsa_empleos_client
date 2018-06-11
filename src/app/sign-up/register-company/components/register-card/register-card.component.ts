import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../shared/register.service';
import { SubmitStatus } from '../../../shared/submit-status.interface';
import { failure, success } from '../../../shared/data';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss']
})
export class RegisterCardComponent {

  currentStep = 1;
  size = 'big';
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
      this.submitStatusData = success
    } else {
      this.submitStatusData = failure;
    }
  }
}
