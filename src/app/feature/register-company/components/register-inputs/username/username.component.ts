import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

// utils
import { Error } from '../../../shared/error.interface';
import { Manager } from '../../../shared/manager.model';
import { definitions } from '../../../shared/definitions.variables';
import { RegisterService } from '../../../shared/register.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html'
})
export class UsernameComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Output()
  update = new EventEmitter<boolean>();

  // control
  username: AbstractControl;

  // error handling variables
  showMessages = false;
  hints: Error[];
  warnings: Error[];
  validationManger: Manager;

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {

    this.username = this.parent.get('username');
    this.initErrorMessaging();

    this.username.valueChanges.subscribe(() => {
      this.updateLengthStatus();
      this.updateRequiredStatus();
      this.updateRequirementsStatus();
    });

    this.username.valueChanges
      .filter(value => {
        const proceed = (value.length >= 3 && value.length <= 15);
        if (!proceed) { this.updateUsernameStatus(true); }
        return proceed
      })
      .debounceTime(500)
      .switchMap(value => this.registerService.checkExistence('username', value))
      .subscribe(flag => this.updateUsernameStatus(flag))
  }

  initErrorMessaging() {

    this.hints = [
      definitions.length(3, 15),
      definitions.username()
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

  updateUsernameStatus(flag) {
    this.validationManger.setHintStatus('async-username', flag);
    this.updateRequirementsStatus();
    // this.updateFieldStatus(flag);
  }

  /*updateFieldStatus(flag) {
    const hasErrors = this.displayWarnings;
    const componentIsValid = hasErrors && flag;
    this.update.emit(componentIsValid);
  }*/

  get displayWarnings() {
    return this.validationManger.displayWarnings();
  }
}
