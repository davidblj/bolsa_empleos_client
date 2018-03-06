import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  @Output()
  next = new EventEmitter<number>();

  step = 1;
  user = {};

  showStep(step: number) {
    return this.step === step;
  }

  addStepOne({username, password}) {
    this.nextStep();
    this.user['username'] = username;
    this.user['password'] = password;
  }

  addStepTwo({logo, company, website, details, sector, nit}) {
    this.nextStep();
    this.user['logo'] = logo;
    this.user['company'] = company;
    this.user['website'] = website;
    this.user['details'] = details;
    this.user['sector'] = sector;
    this.user['nit'] = nit;
  }

  nextStep() {
    this.step++;
    this.next.emit(this.step);
  }

}
