import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Manager } from '../../../../../shared/classes/manager.class';
import { Error } from '../../../../../shared/interfaces/error.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input()
  control: AbstractControl;

  contactField = 'Contacto';
  validationManager: Manager;

  constructor() { }

  ngOnInit() {
    const hints: Error[] = [];
    const warnings: Error[] = [];
    this.validationManager = new Manager(
      hints,
      warnings,
      this.control
    );
  }
}
