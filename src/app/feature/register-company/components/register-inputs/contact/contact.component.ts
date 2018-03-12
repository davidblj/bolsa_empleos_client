import { Component, Input, OnInit } from '@angular/core';
import { Manager } from '../../../../../shared-d/classes/manager.class';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Error } from '../../../../../shared-d/interfaces/error.interface';
import { definitions } from '../../../../../shared-d/utils/definitions.variables';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Contacto';
  placeholder = 'celular o teléfono fijo';

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
    this.updateRequiredStatus();
  }

  onTouch() {
    this.contact.markAsTouched();
  }

  updateRequiredStatus() {
    this.validationManager.updateRequiredStatus();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
