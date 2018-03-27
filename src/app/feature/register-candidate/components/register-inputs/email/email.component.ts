import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// classes
import { Manager } from '../../../../../shared-d/classes/manager.class';

// interfaces
import { Error } from '../../../../../shared-d/interfaces/error.interface';

// variables
import { definitions } from '../../../../../shared-d/utils/definitions.variables';

// services
import { RegisterService } from '../../../shared/register.service';
import { asyncValidator } from '../../../../../shared-d/utils/async-validator';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'email';
  email: AbstractControl;
  validationManager: Manager;

  constructor(private registerService: RegisterService) {}

  ngOnInit() {

    this.email = this.parent.get('email');
    this.email.markAsUntouched();
    this.initErrorMessaging();

    asyncValidator.checkField(
      this.email,
      this.getBlockingStatus(),
      this.checkStatusTask(),
      this.validationManager
    )
  }

  initErrorMessaging() {

    this.hints = [
      definitions.email(),
      definitions.async('el correo no esta en uso')
    ];

    this.warnings = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.email
    )
  }

  getBlockingStatus() {
    return () => {
      return this.validationManager.emailStatus
    }
  }

  checkStatusTask() {
    return (value) => {
      return this.registerService.checkExistence('email', value)
    }
  }

  onInput(value) {
    this.email.setValue(value);
    this.validationManager.updateIndependentFields();
  }

  onTouch() {
    this.email.markAsTouched();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }

}
