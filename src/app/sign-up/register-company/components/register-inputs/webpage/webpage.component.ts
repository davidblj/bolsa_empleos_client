import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// interfaces
import { Error } from '../../../../../shared/interfaces/error.interface';

// variables
import { definitions } from '../../../../../shared/utils/definitions.variables';

// classes
import { Manager } from '../../../../../shared/classes/manager.class';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html'
})
export class WebpageComponent implements OnInit {

  @Input()
  parent: FormGroup;

  fieldName = 'Pagina web';
  website: AbstractControl;
  validationManager: Manager;

  ngOnInit() {
    this.website = this.parent.get('website');
    this.website.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    const hints: Error[] = [
      definitions.website()
    ];

    const warnings: Error[] = [
      definitions.required()
    ];

    this.validationManager = new Manager(
      hints,
      warnings,
      this.website
    )
  }
}
