import { Component, Input, OnInit } from '@angular/core';
import { Manager } from '../../../../../shared/classes/manager.class';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Error } from '../../../../../shared/interfaces/error.interface';
import { definitions } from '../../../../../shared/utils/definitions.variables';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Ciudad';

  city: AbstractControl;
  validationManager: Manager;

  constructor() { }

  ngOnInit() {
    this.city = this.parent.get('city');
    this.city.markAsUntouched();
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
      this.city
    )
  }

  onInput(value) {
    this.city.setValue(value);
    this.updateRequiredStatus();
  }

  onTouch() {
    this.city.markAsTouched();
  }

  updateRequiredStatus() {
    this.validationManager.updateRequiredStatus();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
