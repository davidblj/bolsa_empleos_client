import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// interfaces
import { Error } from '../../../../../shared/interfaces/error.interface';

// variables
import { definitions } from '../../../../../shared/utils/definitions.variables';

// classes
import { Manager } from '../../../../../shared/classes/manager.class';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html'
})
export class NameComponent implements OnInit {

  @Input()
  parent: FormGroup;

  fieldName = 'Nombre';
  name: AbstractControl;
  validationManager: Manager;

  ngOnInit() {

    this.name = this.parent.get('name');
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    const hints: Error[] = [
      definitions.length(3, 30)
    ];

    const warnings: Error[] = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      hints,
      warnings,
      this.name
    )
  }
}
