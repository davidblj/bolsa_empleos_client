import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Error } from '../../../error.interface';
import { Manager } from '../../../manager.model';
import { Definitions } from '../../../definitions.variables';

@Component({
  selector: 'app-nit',
  templateUrl: './nit.component.html',
  styleUrls: ['./nit.component.scss']
})
export class NitComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'NIT';

  nit: AbstractControl;
  validationManager: Manager;

  ngOnInit() {
    this.nit = this.parent.get('nit');
    this.nit.markAsUntouched();
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
      this.nit
    )
  }

  onInput(value) {
    this.nit.setValue(value);
    this.updateRequiredStatus();
  }

  onTouch() {
    this.nit.markAsTouched();
  }

  updateRequiredStatus() {
    this.validationManager.updateRequiredStatus();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
