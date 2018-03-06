import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Error } from '../../../error.interface';
import { Manager } from '../../../manager.model';
import { Definitions } from '../../../definitions.variables';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Detalles';
  type = 'text-area';
  placeholder = '¿A que se dedica tu empresa? Haz una breve descripción.';

  details: AbstractControl;
  validationManager: Manager;

  constructor() { }

  ngOnInit() {
    this.details = this.parent.get('details');
    this.details.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    this.hints = [];

    this.warnings = [
      Definitions.required()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.details
    )
  }

  onInput(value: string) {
    this.details.setValue(value);
    this.updateRequiredStatus();
  }

  onTouch() {
    this.details.markAsTouched();
  }

  updateRequiredStatus() {
    this.validationManager.updateRequiredStatus();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
