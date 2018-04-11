import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// interfaces
import { Error } from '../../../../interfaces/error.interface';

// variables
import { definitions } from '../../../../utils/definitions.variables';

// classes
import { Manager } from '../../../../classes/manager.class';

@Component({
  selector: 'app-contact-d',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  @Input()
  parent: FormGroup;


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

    const hints: Error[] = [];

    const warnings: Error[] = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      hints,
      warnings,
      this.contact
    )
  }
}
