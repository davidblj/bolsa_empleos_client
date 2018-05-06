import { Component } from '@angular/core';

@Component({
  selector: 'app-job-offer-toggle-input',
  templateUrl: './job-offer-toggle-input.component.html',
  styleUrls: ['./job-offer-toggle-input.component.scss']
})
export class JobOfferToggleInputComponent {

  status = true;

  toggleMessage() {
    this.status = !this.status;
  }

  get buttonMessage() {

    if (this.status) {
      return 'no';
    } else {
      return 'si';
    }
  }
}
