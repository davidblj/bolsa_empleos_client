import { Component, Input, OnInit } from '@angular/core';
import { Manager } from '../../classes/manager.class';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

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
