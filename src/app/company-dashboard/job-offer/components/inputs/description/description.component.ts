import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Manager } from '../../../../../shared/classes/manager.class';
import { definitions } from '../../../../../shared/utils/definitions.variables';
import { Error } from '../../../../../shared/interfaces/error.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html'
})
export class DescriptionComponent implements OnInit {

  @Input()
  parent: FormGroup;

  jobDescriptionField = 'Describe tu oferta';
  jobDescriptionType = 'text-area';

  description: AbstractControl;
  validationManager: Manager;

  constructor() { }

  ngOnInit() {
    this.description = this.parent.get('description');
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
      this.description
    );
  }
}
