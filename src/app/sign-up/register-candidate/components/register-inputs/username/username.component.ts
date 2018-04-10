import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// classes
import { Manager } from '../../../../../shared/classes/manager.class';

// interfaces
import { Error } from '../../../../../shared/interfaces/error.interface';

// variables
import { definitions } from '../../../../../shared/utils/definitions.variables';
import { asyncValidator } from '../../../../../shared/utils/async-validator';

// services
import { RegisterService } from '../../../shared/register.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html'
})
export class UsernameComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Nombre de usuario';
  username: AbstractControl;
  validationManager: Manager;

  constructor(private registerService: RegisterService) {}

  ngOnInit() {

    this.username = this.parent.get('username');
    this.username.markAsUntouched();
    this.initErrorMessaging();

    asyncValidator.checkField(
      this.username,
      this.getBlockingStatus(),
      this.checkStatusTask(),
      this.validationManager)
  }

  initErrorMessaging() {

    this.hints = [
      definitions.length(3, 15),
      definitions.async('el usuario es único')
    ];

    this.warnings = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.username
    )
  }

  getBlockingStatus() {
    return () => {
      return this.validationManager.lengthStatus;
    };
  }

  checkStatusTask() {
    return (value) => {
      return this.registerService.checkExistence('username', value)
    }
  }

  onInput(value: string) {
    this.username.setValue(value);
    this.validationManager.updateIndependentFields();
  }

  onTouch() {
    this.username.markAsTouched();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
