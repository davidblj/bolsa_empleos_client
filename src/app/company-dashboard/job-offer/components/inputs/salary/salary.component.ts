import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Manager } from '../../../../../shared/classes/manager.class';
import { definitions } from '../../../../../shared/utils/definitions.variables';
import { Error } from '../../../../../shared/interfaces/error.interface';
import { CustomValidators } from '../../../../../shared/utils/custom-validators.functions';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html'
})
export class SalaryComponent implements OnInit {

  @Input()
  parent: FormGroup;

  jobSalaryField = 'Salario (opcional)';
  jobSalaryPlaceHolder = 'cuanto paga la posicion';

  salary: AbstractControl;
  validationManager: Manager;
  numericValidationSet = false;

  ngOnInit() {

    this.salary = this.parent.get('salary');
    this.initErrorMessaging();
    this.setConditions();
  }

  initErrorMessaging() {

    const hints: Error[] = [];

    const warnings: Error[] = [
      definitions.numeric_v2()
    ];

    this.validationManager = new Manager(
      hints,
      warnings,
      this.salary
    );
  }

  setConditions() {
    // dynamically add or remove the numeric validator on this field
    this.salary.valueChanges.subscribe(value => {

      if (value.length === 0) {
        this.unsetNumericValidator();
      } else  {
        this.setNumericValidator();
      }
    });

    this.validationManager.setWarningStatus('numeric', false);
  }

  setNumericValidator() {
    if (!this.numericValidationSet) {
      this.salary.setValidators(CustomValidators.isNumeric);
      this.numericValidationSet = true;
    }
  }

  unsetNumericValidator() {
    this.validationManager.setWarningStatus('numeric', false);
    this.salary.clearValidators();
    this.salary.setErrors(null);
    this.numericValidationSet = false;
  }
}
