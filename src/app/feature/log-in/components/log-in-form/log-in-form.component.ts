import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCredentials } from '../../shared/user-credentials.model';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent {

  @Input()
  loading: boolean;

  @Input()
  message: string;

  @Output()
  submit = new EventEmitter<UserCredentials | null>();

  usernamePlaceholder = 'usuario';
  usernameIconSource = 'assets/avatar.svg';
  usernameAutoFocus = true;

  passwordPlaceholder = 'contraseña';
  passwordIconSource = 'assets/padlock.svg';
  passwordType = 'password';

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {

    this.form = this.fb.group({
      username: [
        '',
        [ Validators.required ]
      ],
      password: [
        '',
        [ Validators.required ]
      ]
    });
  }

  onSubmit() {

    if (this.formStatus) {

      this.submit.emit(new UserCredentials(this.form.value));

    } else {

      this.submit.emit(null);
    }
  }

  get formStatus() {
    return this.form.valid;
  }
}
