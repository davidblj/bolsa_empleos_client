import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-form-skeleton',
  templateUrl: './register-form-skeleton.component.html',
  styleUrls: ['./register-form-skeleton.component.scss']
})
export class RegisterFormSkeletonComponent {

  @Input()
  headerTitle: string;

  @Input()
  headerHint: string;

  @Input()
  buttonMessage: string;

  @Output()
  click = new EventEmitter<any>();

  onClick() {
    this.click.emit();
  }

}
