import { Component } from '@angular/core';

@Component({
  selector: 'app-job-offer-toggle-input',
  templateUrl: './job-offer-toggle-input.component.html',
  styleUrls: ['./job-offer-toggle-input.component.scss']
})
export class JobOfferToggleInputComponent {

  status = false;

  toggleMessage() {
    this.status = !this.status;
  }

  get buttonMessage() {

    console.log('toggling');
    if (this.status) {
      return 'no';
    } else {
      return 'si';
    }
  }
}
