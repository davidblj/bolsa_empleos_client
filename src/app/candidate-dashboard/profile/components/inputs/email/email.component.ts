import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Manager } from '../../../../../shared/classes/manager.class';
import { Error } from '../../../../../shared/interfaces/error.interface';
import { definitions } from '../../../../../shared/utils/definitions.variables';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  @Input()
  control: AbstractControl;

  emailDescriptionField = 'Correo';
  validationManager: Manager;

  constructor() { }

  ngOnInit() {
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    const hints: Error[] = [];

    const warnings: Error[] = [
      definitions.email_v2()
    ];

    this.validationManager = new Manager(
      hints,
      warnings,
      this.control
    );
  }
}
