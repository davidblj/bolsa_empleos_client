import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-job-offer-toggle-input',
  templateUrl: './job-offer-toggle-input.component.html',
  styleUrls: ['./job-offer-toggle-input.component.scss']
})
export class JobOfferToggleInputComponent {

  @Input()
  control: AbstractControl;

  toggleMessage() {
    this.control.setValue(!this.control.value);
  }

  get buttonMessage() {
    if (this.control.value) {
      return 'si';
    } else {
      return 'no';
    }
  }
}
