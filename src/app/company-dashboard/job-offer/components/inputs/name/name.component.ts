import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// variables
import { definitions } from '../../../../../shared/utils/definitions.variables';
import { Error } from '../../../../../shared/interfaces/error.interface';
import { Manager } from '../../../../../shared/classes/manager.class';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html'
})
export class NameComponent implements OnInit {

  @Input()
  parent: FormGroup;

  jobNameField = 'Nombre de la oferta';
  jobNamePlaceHolder = 'describe el título por el cual tu estás contratando';

  username: AbstractControl;
  validationManager: Manager;

  ngOnInit() {
    this.username = this.parent.get('name');
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
      this.username
    );
  }
}
