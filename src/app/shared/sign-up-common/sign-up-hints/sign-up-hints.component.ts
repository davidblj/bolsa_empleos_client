import { Component, Input } from '@angular/core';
import { Validator } from '../../../utils/classes/validator.class';
import { FormInput } from '../../../utils/models/form-input.interface';

@Component({
  selector: 'app-sign-up-hints',
  templateUrl: './sign-up-hints.component.html',
  styleUrls: ['./sign-up-hints.component.scss']
})
export class SignUpHintsComponent {

  @Input()
  inputGroup: FormInput;

  ruleIsFailing(validator: Validator): boolean {
    return validator.getStatus(this.input.control);
  }

  get hints() {
    return this.input.hints;
  }

  get input() {
    return this.inputGroup.input;
  }
}
