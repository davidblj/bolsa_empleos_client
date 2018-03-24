import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// classes
import { Manager } from '../../../../../shared-d/classes/manager.class';

// interfaces
import { Error } from '../../../../../shared-d/interfaces/error.interface';

// variables
import { definitions } from '../../../../../shared-d/utils/definitions.variables';

@Component({
  selector: 'app-pid',
  templateUrl: './pid.component.html',
  styleUrls: ['./pid.component.scss']
})
export class PidComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Cedula';
  pid: AbstractControl;
  validationManager: Manager;

  ngOnInit() {
    this.pid = this.parent.get('pid');
    this.pid.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    this.hints = [
      definitions.numeric()
    ];

    this.warnings = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.pid
    )
  }

  onInput(value: string) {
    this.pid.setValue(value);
    this.validationManager.updateIndependentFields();
  }

  onTouch() {
    this.pid.markAsTouched();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
