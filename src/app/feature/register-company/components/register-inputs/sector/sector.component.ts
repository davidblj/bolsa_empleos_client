import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Error } from '../../../error.interface';
import { Manager } from '../../../manager.model';
import { Definitions } from '../../../definitions.variables';

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
  placeholder = 'ej: software, seguros, manufactura, etc.';
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
      Definitions.required()
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