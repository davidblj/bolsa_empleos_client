import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-log-in-form-footer',
  templateUrl: './log-in-form-footer.component.html',
  styleUrls: ['./log-in-form-footer.component.scss']
})
export class LogInFormFooterComponent {

  @Input()
  loading: boolean;

  @Input()
  message: boolean;

  @Output()
  submit = new EventEmitter<any>();

  onSubmit() {
    this.submit.emit();
  }

}
