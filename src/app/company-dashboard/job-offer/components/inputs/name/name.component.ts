import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// classes
import { Manager } from '../../../../../shared/classes/manager.class';

// interfaces
import { Error } from '../../../../../shared/interfaces/error.interface';

// variables
import { definitions } from '../../../../../shared/utils/definitions.variables';
import { asyncValidator } from '../../../../../shared/utils/async-validator';
import { CompanyUserService } from '../../../../../core/services/company-user.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html'
})
export class NameComponent implements OnInit {

  @Input()
  parent: FormGroup;

  jobNameField = 'Nombre de la oferta';
  jobNamePlaceHolder = 'describe el título por el cual tu estás contratando';

  name: AbstractControl;
  validationManager: Manager;

  constructor(private companyUserService: CompanyUserService) {}

  ngOnInit() {
    this.name = this.parent.get('name');
    this.initErrorMessaging();
    this.setAsyncValidator();
    this.setConditions();
  }

  initErrorMessaging() {

    const hints: Error[] = [];

    const warnings: Error[] = [
      definitions.required(),
      definitions.async('La oferta ya se encuentra registrada')
    ];

    this.validationManager = new Manager(
      hints,
      warnings,
      this.name
    );
  }

  setAsyncValidator() {
    asyncValidator.checkField(
      this.name,
      this.getBlockingStatus(),
      this.checkStatusTask(),
      this.validationManager
    )
  }

  getBlockingStatus() {
    return () => {
      return false;
    }
  }

  checkStatusTask() {
    return (value) => {
      return this.companyUserService.checkJobExistence('name', value);
    }
  }

  setConditions() {
    // do not show any error message until this field is modified
    this.validationManager.setWarningStatus('async', false);
  }
}
