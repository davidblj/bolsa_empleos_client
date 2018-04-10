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

  type: AbstractControl;
  currentType: string;

  constructor() { }

  ngOnInit() {
    this.type = this.parent.get('type');
  }

  onClick(type: string) {
    console.log();
    this.type.setValue(type);
    this.currentType = type;
  }

  active(type: string) {
    return this.currentType === type;
  }
}
