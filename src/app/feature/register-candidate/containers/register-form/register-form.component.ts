import { Component, EventEmitter, Output } from '@angular/core';

// classes
import { Candidate } from '../../shared/candidate.model';
import { RegisterService } from '../../shared/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  @Output()
  next = new EventEmitter<any>();

  step = 1;
  user = new Candidate();

  constructor(private registerService: RegisterService) { }

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
    this.user.setEmail(email);
    this.user.setContact(contact);

    // the resumee must be placed at the end of
    // the request to prevent unexpected failed
    // uploads
    this.user.setResumee(resumee);
    this.submit();
  }

  submit() {
    console.log(this.user);
    this.registerService.addUser(this.user).subscribe(
      () => { console.log('sent') },
      (error) => { console.log(error) }
    )
  }

  nextStep() {
    this.step++;
    this.next.emit();
  }
}
