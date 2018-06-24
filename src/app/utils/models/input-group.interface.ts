import { ValidationManager } from '../classes/validation-manager.class';

export enum InputGroupType {
  default = 'text',
  text = 'text-area'
}

export interface  InputGroup {
  validationManager: ValidationManager;
  name: string;
  type: InputGroupType;
  placeholder: string;
}
