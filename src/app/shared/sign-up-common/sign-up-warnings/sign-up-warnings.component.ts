import { Component, Input } from '@angular/core';
import { InputGroup } from '../../../utils/models/input-group.interface';
import { Validator } from '../../../utils/models/validator.interface';

@Component({
  selector: 'app-sign-up-warnings',
  templateUrl: './sign-up-warnings.component.html',
  styleUrls: ['./sign-up-warnings.component.scss']
})
export class SignUpWarningsComponent {

  _inputGroup;

  @Input()
  set inputGroup(inputGroup: InputGroup) {
    console.log(inputGroup.validationManager.validators);
    this._inputGroup = inputGroup
  }

  @Input()
  fieldFocus: boolean;

  ruleIsFailing(validator: Validator): boolean {
    return this.manager.getValidatorStatus(validator);
  }

  get warnings() {
    return this.manager.warnings;
  }

  get manager() {
    return this._inputGroup.validationManager;
  }
}
