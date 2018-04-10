import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// classes
import { Manager } from '../../../../../shared-d/classes/manager.class';

// interfaces
import { Error } from '../../../../../shared-d/interfaces/error.interface';

// variables
import { definitions } from '../../../../../shared-d/utils/definitions.variables';
import { asyncValidator } from '../../../../../shared-d/utils/async-validator';

// services
import { RegisterService } from '../../../shared/register.service';

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

  fieldName = 'Cédula';
  pid: AbstractControl;
  validationManager: Manager;

  constructor(private registerService: RegisterService) {}

  ngOnInit() {
    this.pid = this.parent.get('pid');
    this.pid.markAsUntouched();
    this.initErrorMessaging();

    asyncValidator.checkField(
      this.pid,
      this.getBlockingStatus(),
      this.checkStatusTask(),
      this.validationManager
    );
  }

  initErrorMessaging() {

    this.hints = [
      definitions.numeric(),
      definitions.async('la cédula no esta en uso')
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

  getBlockingStatus() {
    return () => {
      return this.validationManager.numericStatus
    }
  }

  checkStatusTask() {
    return (value) => {
      return this.registerService.checkExistence('pid', value)
    }
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
