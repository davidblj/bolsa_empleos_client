import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Error } from '../../../../../shared/interfaces/error.interface';
import { Manager } from '../../../../../shared/classes/manager.class';
import { definitions } from '../../../../../shared/utils/definitions.variables';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Contacto';
  placeholder = 'celular';

  contact: AbstractControl;
  validationManager: Manager;

  constructor() { }

  ngOnInit() {
    this.contact = this.parent.get('contact');
    this.contact.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    this.hints = [];

    this.warnings = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.contact
    )
  }

  onInput(value) {
    this.contact.setValue(value);
    this.validationManager.updateIndependentFields();
  }

  onTouch() {
    this.contact.markAsTouched();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
