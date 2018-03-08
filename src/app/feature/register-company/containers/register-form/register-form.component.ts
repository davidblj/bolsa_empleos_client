import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterService } from '../../shared/register.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  @Output()
  next = new EventEmitter<number>();

  step = 1;
  user = new User();

  constructor(private registerService: RegisterService) {}

  showStep(step: number) {
    return this.step === step;
  }

  addStepOne({username, password}) {
    this.nextStep();
    this.user.setUsername(username);
    this.user.setPassword(password);
  }

  addStepTwo({logo, name, website, details, sector, nit}) {
    this.nextStep();
    this.user.setLogo(logo);
    this.user.setName(name);
    this.user.setWebsite(website);
    this.user.setDetails(details);
    this.user.setSector(sector);
    this.user.setNit(nit);
  }

  addStepThree({admin, contact, email}) {
    this.user.setAdmin(admin);
    this.user.setContact(contact);
    this.user.setEmail(email);
    this.submit();
  }

  submit() {
    this.registerService.addUser(this.user).subscribe(
      () => { console.log('sent') },
      (error) => { console.log(error) }
    );
  }

  nextStep() {
    this.step++;
    this.next.emit(this.step);
  }

}
