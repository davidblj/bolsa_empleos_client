import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// interfaces
import { Error } from '../../../../interfaces/error.interface';

// variables
import { definitions } from '../../../../utils/definitions.variables';

// classes
import { Manager } from '../../../../classes/manager.class';

@Component({
  selector: 'app-check-password-d',
  templateUrl: './check-password.component.html'
})
export class CheckPasswordComponent implements OnInit {

  _password: string;

  @Input()
  parent: FormGroup;

  @Input()
  set password(password: string) {
    this.onPasswordUpdate(password);
  };

  @Output()
  status = new EventEmitter<boolean>();

  // control
  fieldName = 'Confirma tu contraseña';
  inputType = 'password';
  checkPassword = new FormControl();
  validationManager: Manager;

  ngOnInit() {

    this.initErrorMessaging();
    this.onInput();
  }

  initErrorMessaging() {

    const hints: Error[] = [
      definitions.match(),
    ];

    const warnings: Error[] = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      hints,
      warnings,
      this.checkPassword);
  }

  onInput() {

    this.checkPassword.valueChanges.subscribe(() => {
      this.handleMatchingStatus();
    });
  }

  onPasswordUpdate(password: string) {

    this._password = password;

    // uninitialized variable may crash the sign up component
    if (this.validationManager) {
      this.handleMatchingStatus();
    }
  }

  // update and emit the matching status
  handleMatchingStatus() {

    const hints = this.validationManager.hints;

    this.validationManager.updateMatchingStatus(this._password);
    hints.forEach(hint => {
      if (hint.key === 'match') {
        const status = hint.resolved;
        this.status.emit(status);
      }
    });
  }
}
