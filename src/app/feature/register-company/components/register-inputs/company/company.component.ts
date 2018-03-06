import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Error } from '../../../error.interface';
import { Definitions } from '../../../definitions.variables';
import { Manager } from '../../../manager.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Nombre';
  company: AbstractControl;
  validationManager: Manager;

  ngOnInit() {
    this.company = this.parent.get('company');
    this.company.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    this.hints = [
      Definitions.length(2, 20)
    ];

    this.warnings = [
      Definitions.required(),
      Definitions.requirements()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.company
    )
  }

  onInput(value: string) {
    this.company.setValue(value);
    this.updateLengthStatus();
    this.updateRequiredStatus();
    this.updateRequirementsStatus();
  }

  onTouch() {
    this.company.markAsTouched();
  }

  updateLengthStatus() {
    this.validationManager.updateLengthStatus();
  }

  updateRequiredStatus() {
    this.validationManager.updateRequiredStatus();
  }

  updateRequirementsStatus() {
    this.validationManager.updateRequirementsStatus();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
