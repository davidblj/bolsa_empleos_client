import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// variables
import { definitions } from '../../../../../shared/utils/definitions.variables';

// classes
import { Manager } from '../../../../../shared/classes/manager.class';

// interfaces
import { Error } from '../../../../../shared/interfaces/error.interface';

@Component({
  selector: 'app-check-password',
  templateUrl: './check-password.component.html'
})
export class CheckPasswordComponent implements OnInit, OnChanges {

  @Input()
  parent: FormGroup;

  @Input()
  password: string;

  @Output()
  status = new EventEmitter<boolean>();

  hints: Error[];
  warnings: Error[];
  inputType = 'password';

  fieldName = 'Confirma tu contraseña';
  checkPassword = new FormControl();
  validationManager: Manager;

  ngOnInit() {
    this.checkPassword.markAsUntouched();
    this.initErrorMessaging();
  }

  ngOnChanges(changes: SimpleChanges) {

    const password = changes.password;
    if (password && this.validationManager) {
      this.validationManager.updateMatchingStatus(password.currentValue);
    }
  }

  initErrorMessaging() {

    this.hints = [
      definitions.match(),
    ];

    this.warnings = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.checkPassword);
  }

  onInput(value: string) {
    this.checkPassword.setValue(value);
    this.updateMatchingStatus();
    this.validationManager.updateIndependentFields();
    this.emitMatchingStatus();
  }

  emitMatchingStatus() {

    const hints = this.validationManager.hints;
    hints.forEach(hint => {
      if (hint.key === 'match') {
        const status = hint.resolved;
        this.status.emit(status);
      }
    });
  }

  updateMatchingStatus() {
    this.validationManager.updateMatchingStatus(this.password);
  }

  onTouch() {
    this.checkPassword.markAsTouched();
  }

  get displayWarnings() {
   return this.validationManager.displayWarnings();
  }
}
