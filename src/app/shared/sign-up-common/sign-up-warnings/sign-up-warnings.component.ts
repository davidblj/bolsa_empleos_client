import { Component, Input } from '@angular/core';
import { FormInput } from '../../../utils/models/form-input.interface';
import { Validator } from '../../../utils/classes/validator.class';

@Component({
  selector: 'app-sign-up-warnings',
  templateUrl: './sign-up-warnings.component.html',
  styleUrls: ['./sign-up-warnings.component.scss']
})
export class SignUpWarningsComponent {

  @Input()
  inputGroup: FormInput;

  @Input()
  fieldFocus: boolean;

  ruleIsFailing(validator: Validator): boolean {
    return validator.getStatus(this.input.control);
  }

  get warnings() {
    return this.input.warnings;
  }

  get input() {
    return this.inputGroup.input;
  }
}
