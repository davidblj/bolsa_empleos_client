import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Manager } from '../../../classes/manager.class';

@Component({
  selector: 'app-sign-up-form-group',
  templateUrl: './sign-up-form-group.component.html',
  styleUrls: ['./sign-up-form-group.component.scss']
})
export class SignUpFormGroupComponent implements OnInit {

  @Input()
  fieldName: string;

  @Input()
  validationManager: Manager;

  // input (default) or text area
  @Input()
  type = 'input';

  // text (default) or password
  @Input()
  inputType = 'text';

  @Input()
  placeholder = '';

  @Output()
  changed = new EventEmitter<string>();

  showMessages = false;

  ngOnInit() {

    const input = this.validationManager.field;

    input.valueChanges.subscribe((value: string) => {
      this.changed.emit(value);
      this.validationManager.updateIndependentFields();
    });
  }

  changeMessageVisibility() {
    this.showMessages = !this.showMessages;
  }

  isType(type: string): boolean {
    return type === this.type;
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
