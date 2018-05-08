import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Manager } from '../../../../../shared/classes/manager.class';
import { definitions } from '../../../../../shared/utils/definitions.variables';
import { Error } from '../../../../../shared/interfaces/error.interface';

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

    // do not show any error message until this field is modified
    this.salary.valueChanges.subscribe(value => {
      if (value.length === 0) {
        this.salary.setErrors({'numeric': false});
        console.log(this.salary.getError('numeric'));
      }
    });

    this.validationManager.setWarningStatus('numeric', false);
  }
}
