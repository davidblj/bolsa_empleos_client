import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// interfaces
import { Error } from '../../../../interfaces/error.interface';

// variables
import { definitions } from '../../../../utils/definitions.variables';

// classes
import { Manager } from '../../../../classes/manager.class';

@Component({
  selector: 'app-password-d',
  templateUrl: './password.component.html'
})

export class PasswordComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Output()
  changed = new EventEmitter<string>();

  // control
  fieldName = 'Contraseña';
  inputType = 'password';
  password: AbstractControl;
  validationManager: Manager;

  ngOnInit() {

    this.password = this.parent.get('password');

    this.initPasswordErrorMessaging();
    this.onInput();
  }

  initPasswordErrorMessaging() {

    const hints: Error[] = [
      definitions.length(8, 16),
      definitions.number()
    ];

    const warnings: Error[] = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      hints,
      warnings,
      this.password);
  }

  onInput() {

    this.password.valueChanges.subscribe((value) => {
      this.changed.emit(value);
    })
  }
}
