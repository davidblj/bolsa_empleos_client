import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

// utils
import { Error } from '../../../shared/error.interface';
import { Manager } from '../../../shared/manager.model';
import { definitions } from '../../../shared/definitions.variables';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html'
})
export class UsernameComponent implements OnInit {

  @Input()
  parent: FormGroup;

  // control
  username: AbstractControl;

  // error handling variables
  showMessages = false;
  hints: Error[];
  warnings: Error[];
  validationManger: Manager;

  ngOnInit(): void {

    this.username = this.parent.get('username');
    this.initErrorMessaging();

    this.username.valueChanges.subscribe(() => {
      this.updateLengthStatus();
      this.updateRequiredStatus();
      this.updateRequirementsStatus();
    });
  }

  initErrorMessaging() {

    this.hints = [
      definitions.length(3, 15),
    ];

    this.warnings = [
      definitions.required(),
      definitions.requirements()
    ];

    this.validationManger = new Manager(this.hints, this.warnings, this.username);
  }

  changeMessageVisibility() {
    this.showMessages = !this.showMessages;
  }

  updateLengthStatus() {
    this.validationManger.updateLengthStatus();
  }

  updateRequiredStatus() {
    this.validationManger.updateRequiredStatus();
  }

  updateRequirementsStatus() {
    this.validationManger.updateRequirementsStatus();
  }

  get displayWarnings() {
    return this.validationManger.displayWarnings();
  }
}
