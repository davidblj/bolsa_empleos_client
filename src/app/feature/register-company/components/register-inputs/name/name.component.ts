import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Error } from '../../../../../shared-d/interfaces/error.interface';
import { definitions } from '../../../../../shared-d/utils/definitions.variables';
import { Manager } from '../../../../../shared-d/classes/manager.class';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html'
})
export class NameComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Nombre';
  name: AbstractControl;
  validationManager: Manager;

  ngOnInit() {
    this.name = this.parent.get('name');
    this.name.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    this.hints = [
      definitions.length(3, 30)
    ];

    this.warnings = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.name
    )
  }

  onInput(value: string) {
    this.name.setValue(value);
    this.validationManager.updateIndependentFields();
  }

  onTouch() {
    this.name.markAsTouched();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
