import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-form-template',
  templateUrl: './register-form-template.component.html',
  styleUrls: ['./register-form-template.component.scss']
})
export class RegisterFormTemplateComponent {

  @Input()
  headerHint: string;

  @Input()
  buttonMessage: string;

  @Input()
  status: boolean;

  @Output()
  submit = new EventEmitter<any>();

  onSubmit() {
    this.submit.emit();
  }

}
