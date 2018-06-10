import { Injectable } from '@angular/core';
import { SubmitStatus } from './submit-status.interface';

@Injectable()
export class SubmitStatusService {

  submitStatus: SubmitStatus;

  constructor() { }

  set state(submitState: SubmitStatus) {
    this.submitStatus = submitState;
  }
}
