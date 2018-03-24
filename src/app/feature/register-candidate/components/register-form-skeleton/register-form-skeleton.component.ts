import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-form-skeleton',
  templateUrl: './register-form-skeleton.component.html',
  styleUrls: ['./register-form-skeleton.component.scss']
})
export class RegisterFormSkeletonComponent {

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
