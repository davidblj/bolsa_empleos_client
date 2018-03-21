import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Error } from '../../interfaces/error.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  fieldName: string;

  @Input()
  type = 'input';

  @Input()
  inputType = 'text';

  @Input()
  placeholder = '';

  @Input()
  warningStatus: boolean;

  @Input()
  warnings: Error[];

  @Input()
  hints: Error[];

  @Output()
  changed = new EventEmitter<string>();

  @Output()
  touch = new EventEmitter<any>();

  showMessages = false;
  field = new FormControl();

  ngOnInit() {
    this.field.valueChanges.subscribe((value: string) => {
      this.changed.emit(value);
    });
  }

  changeMessageVisibility() {
    this.showMessages = !this.showMessages;
  }

  toggleTouch() {
    this.touch.emit();
  }

  isType(type: string): boolean {
    return type === this.type;
  }
}
