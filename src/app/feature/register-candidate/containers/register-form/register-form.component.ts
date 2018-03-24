import { Component, EventEmitter, Output } from '@angular/core';

// classes
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  @Output()
  next = new EventEmitter<any>();

  step = 1;
  user = new User();

  constructor() { }

  addStepOne({username, password}) {
    this.nextStep();
    this.user.setUsername(username);
    this.user.setPassword(password);
  }

  addStepTwo({type, name, pid}) {
    this.nextStep();
    this.user.setType(type);
    this.user.setName(name);
    this.user.setPid(pid);
  }

  addStepThree({resumee, email, contact}) {
    this.nextStep();
    this.user.setResumee(resumee);
    this.user.setEmail(email);
    this.user.setContact(contact);
    this.submit();
  }

  submit() {
    console.log(this.user)
  }

  nextStep() {
    this.step++;
    this.next.emit();
  }
}
