import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Manager } from '../../../../../shared/classes/manager.class';
import { Error } from '../../../../../shared/interfaces/error.interface';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  @Input()
  control: AbstractControl;

  nameDescriptionField = 'Nombre completo';
  validationManager: Manager;

  constructor() { }

  ngOnInit() {
    this.initErrorMessaging();
  }

  initErrorMessaging() {
    const hints: Error[] = [];
    const warnings: Error[] = [];
    this.validationManager = new Manager(
      hints,
      warnings,
      this.control
    );
  }
}
