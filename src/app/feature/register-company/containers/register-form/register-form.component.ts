import { Component, EventEmitter, Output } from '@angular/core';

// classes
import { Company } from '../../shared/company.model';

// services
import { RegisterService } from '../../shared/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  @Output()
  next = new EventEmitter<number>();

  step = 1;
  user = new Company();
  logo: File;

  constructor(private registerService: RegisterService) {}

  showStep(step: number) {
    return this.step === step;
  }

  addStepOne({username, password}) {
    this.nextStep();
    this.user.setUsername(username);
    this.user.setPassword(password);
  }

  addStepTwo({logo, name, website, details, sector, city, nit}) {
    this.nextStep();
    this.logo = logo;
    this.user.setName(name);
    this.user.setWebsite(website);
    this.user.setDetails(details);
    this.user.setSector(sector);
    this.user.setCity(city);
    this.user.setNit(nit);
  }

  addStepThree({admin, contact, email}) {
    this.nextStep();
    this.user.setAdmin(admin);
    this.user.setContact(contact);
    this.user.setEmail(email);

    // the logo must be placed at the end of
    // the request to prevent unexpected failed
    // uploads
    this.user.setLogo(this.logo);
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
    this.next.emit();
  }

}
