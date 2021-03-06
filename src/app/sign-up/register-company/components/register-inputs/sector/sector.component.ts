import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// interfaces
import { Error } from '../../../../../shared/interfaces/error.interface';

// variables
import { definitions } from '../../../../../shared/utils/definitions.variables';

// classes
import { Manager } from '../../../../../shared/classes/manager.class';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
})
export class SectorComponent implements OnInit {

  @Input()
  parent: FormGroup;

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

    const hints: Error[] = [];

    const warnings: Error[] = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      hints,
      warnings,
      this.sector
    )
  }
}
