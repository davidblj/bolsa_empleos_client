import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// interfaces
import { Error } from '../../../../../shared/interfaces/error.interface';

// variables
import { definitions } from '../../../../../shared/utils/definitions.variables';

// classes
import { Manager } from '../../../../../shared/classes/manager.class';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  @Input()
  parent: FormGroup;

  fieldName = 'Detalles';
  type = 'text-area';
  placeholder = '¿a que se dedica tu empresa?';
  details: AbstractControl;
  validationManager: Manager;

  constructor() { }

  ngOnInit() {
    this.details = this.parent.get('details');
    this.details.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    const hints: Error[] = [];

    const warnings: Error[] = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      hints,
      warnings,
      this.details
    )
  }
}
