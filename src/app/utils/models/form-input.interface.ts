import { Input } from '../classes/input.class';

export enum InputGroupType {
  default = 'default',
  text = 'text-area'
}

export enum InputGroupTextType {
  default = 'text',
  password = 'password'
}

export interface  FormInput {
  input: Input;
  name: string;
  inputType: InputGroupType;
  placeholder: string;
  texType?: InputGroupTextType;
}
