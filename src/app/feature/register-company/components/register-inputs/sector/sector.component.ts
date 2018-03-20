import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Error } from '../../../../../shared-d/interfaces/error.interface';
import { Manager } from '../../../../../shared-d/classes/manager.class';
import { definitions } from '../../../../../shared-d/utils/definitions.variables';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Sector industrial';
  sector: AbstractControl;
  validationManager: Manager;

  constructor() { }

  ngOnInit() {
    this.sector = this.parent.get('sector');
    this.sector.markAsUntouched();
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
      this.sector
    )
  }

  onInput(value: string) {
    this.sector.setValue(value);
    this.updateRequiredStatus();
  }

  onTouch() {
    this.sector.markAsTouched();
  }

  updateRequiredStatus() {
    this.validationManager.updateRequiredStatus();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }

}
