import { Component, Input, OnInit } from '@angular/core';
import { Validator } from '../../../utils/models/validator.interface';
import { InputGroup } from '../../../utils/models/input-group.interface';

@Component({
  selector: 'app-sign-up-hints',
  templateUrl: './sign-up-hints.component.html',
  styleUrls: ['./sign-up-hints.component.scss']
})
export class SignUpHintsComponent {

  @Input()
  inputGroup: InputGroup;

  ruleIsFailing(validator: Validator): boolean {
    return this.manager.getValidatorStatus(validator);
  }

  get hints() {
    return this.manager.hints;
  }

  get manager() {
    return this.inputGroup.validationManager;
  }
}
