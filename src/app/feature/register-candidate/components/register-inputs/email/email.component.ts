import { Component, Input, OnInit } from '@angular/core';

// classes
import { Manager } from '../../../../../shared-d/classes/manager.class';

// interfaces
import { Error } from '../../../../../shared-d/interfaces/error.interface';

// variables
import { definitions } from '../../../../../shared-d/utils/definitions.variables';
import { AbstractControl, FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {

    this.email = this.parent.get('email');
    this.email.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    this.hints = [
      definitions.email()
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
