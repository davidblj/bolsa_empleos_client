
import { FormGroup } from '@angular/forms';
import { Validator } from '../../../../utils/models/validator.interface';
import { SignUpFormValidations } from '../../../../utils/constants/sign-up-form-validations';
import { ValidationManager } from '../../../../utils/classes/validation-manager.class';
import { InputGroup, InputGroupType } from '../../../../utils/models/input-group.interface';

export class FormConfig  {

  form: FormGroup;

  constructor(form: FormGroup) {
    this.form = form;
  }

  get username(): InputGroup {

    const validators: Validator[] = [
      SignUpFormValidations.required(),
      SignUpFormValidations.validity(),
      SignUpFormValidations.range(3, 15)
    ];
    const control = this.form.controls['username'];

    const validationManager = new ValidationManager(validators, control);
    return {
      validationManager,
      name: 'Nombre de usuario',
      type: InputGroupType.default,
      placeholder: ''
    }
  }

  get password(): InputGroup {
    return null;
  }

  get confirmPassword(): InputGroup {
    return null;
  }
}
