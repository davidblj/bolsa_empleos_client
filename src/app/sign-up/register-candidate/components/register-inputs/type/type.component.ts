import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  @Input()
  parent: FormGroup;

  role: AbstractControl;
  currentType: string;

  constructor() { }

  ngOnInit() {
    this.role = this.parent.get('role');
  }

  onClick(type: string) {
    this.role.setValue(type);
    this.currentType = type;
  }

  active(type: string) {
    return this.currentType === type;
  }
}
