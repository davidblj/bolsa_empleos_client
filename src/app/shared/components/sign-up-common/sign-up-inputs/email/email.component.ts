import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// interfaces
import { Error } from '../../../../interfaces/error.interface';

// variables
import { definitions } from '../../../../utils/definitions.variables';

// classes
import { Manager } from '../../../../classes/manager.class';

@Component({
  selector: 'app-email-d',
  templateUrl: './email.component.html'
})
export class EmailComponent implements OnInit {

  @Input()
  parent: FormGroup;

  fieldName = 'Correo electronico';
  email: AbstractControl;
  validationManager: Manager;

  ngOnInit() {
    this.email = this.parent.get('email');
    this.email.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    const hints: Error[] = [
      definitions.email()
    ];

    const warnings: Error[] = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      hints,
      warnings,
      this.email
    )
  }

}
