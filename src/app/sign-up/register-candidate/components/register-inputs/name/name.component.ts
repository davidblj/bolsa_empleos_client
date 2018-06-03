import { Component, Input, OnInit } from '@angular/core';

// classes
import { Manager } from '../../../../../shared/classes/manager.class';

// interfaces
import { Error } from '../../../../../shared/interfaces/error.interface';

// variables
import { definitions } from '../../../../../shared/utils/definitions.variables';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Nombre completo';
  name: AbstractControl;
  validationManager: Manager;

  ngOnInit() {
    this.name = this.parent.get('name');
    this.name.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    this.hints = [
      definitions.length(3, 50)
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
