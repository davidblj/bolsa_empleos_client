import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// interfaces
import { Error } from '../../../../../shared/interfaces/error.interface';

// variables
import { definitions } from '../../../../../shared/utils/definitions.variables';

// classes
import { Manager } from '../../../../../shared/classes/manager.class';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {

  @Input()
  parent: FormGroup;

  fieldName = 'Ciudad';
  city: AbstractControl;
  validationManager: Manager;

  constructor() { }

  ngOnInit() {
    this.city = this.parent.get('city');
    this.city.markAsUntouched();
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
      this.city
    )
  }
}
