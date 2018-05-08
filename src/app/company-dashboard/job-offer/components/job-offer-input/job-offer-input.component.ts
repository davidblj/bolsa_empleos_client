import { Component, Input, OnInit } from '@angular/core';
import { Manager } from '../../../../shared/classes/manager.class';

@Component({
  selector: 'app-job-offer-input',
  templateUrl: './job-offer-input.component.html',
  styleUrls: ['./job-offer-input.component.scss']
})
export class JobOfferInputComponent implements OnInit {

  @Input()
  fieldName: string;

  @Input()
  validationManager: Manager;

  @Input()
  placeHolder = '';

  @Input()
  type = 'input';

  ngOnInit() {

    const input = this.validationManager.field;

    input.valueChanges.subscribe(() => {
      this.validationManager.updateIndependentFields();
    });
  }

  isType(type: string): boolean {
    return type === this.type;
  }

  get control() {
    return this.validationManager.field;
  }

  get warnings() {
    return this.validationManager.warnings;
  }

  get showMessages() {
    return this.validationManager.field.touched;
  }
}
