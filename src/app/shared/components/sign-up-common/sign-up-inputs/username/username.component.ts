import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

// interfaces
import { Error } from '../../../../interfaces/error.interface';

// classes
import { Manager } from '../../../../classes/manager.class';

// variables
import { definitions } from '../../../../utils/definitions.variables';
import { asyncValidator } from '../../../../utils/async-validator';

// services
import { RegisterService } from '../../../../../sign-up/register-company/shared/register.service';

@Component({
  selector: 'app-username-d',
  templateUrl: './username.component.html'
})
export class UsernameComponent implements OnInit {

  @Input()
  parent: FormGroup;

  fieldName = 'Usuario';
  username: AbstractControl;
  validationManager: Manager;

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {

    this.username = this.parent.get('username');
    this.initErrorMessaging();

    asyncValidator.checkField(
      this.username,
      this.getBlockingStatus(),
      this.checkStatusTask(),
      this.validationManager
    );
  }

  initErrorMessaging() {

    const hints: Error[] = [
      definitions.length(3, 15),
      definitions.async('el usuario es único')
    ];

    const warnings: Error[] = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      hints,
      warnings,
      this.username
    );
  }

  getBlockingStatus() {
    return () => {
      return this.validationManager.lengthStatus;
    }
  }

  checkStatusTask() {
    return (value) => {
      // do get dynamically the service to consume
      return this.registerService.checkExistence('username', value);
    }
  }
}
