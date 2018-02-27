import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Error } from '../../../error.interface';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html'
})
export class UsernameComponent implements OnInit {

  @Input()
  parent: FormGroup;

  // controls
  username: AbstractControl;
  length: number;

  // error handling variables
  showMessages = false;
  hints: Error[] = [
    { key: 'length', message: 'tiene que estar entre los 3 y 15 caracteres', resolved: false }
  ];
  warnings: Error[] = [
    { key: 'required', message: 'el campo es requerido', resolved: false },
    { key: 'requirements', message: 'no se cumplen con los requisitos', resolved: false }
  ];

  ngOnInit(): void {
    this.username = this.parent.get('username');
    this.username.valueChanges.subscribe((username: string) => {
      this.length = username.length;
      this.updateLengthStatus();
      this.updateRequiredStatus();
      this.updateRequirementsStatus();
    });
  }

  changeMessageVisibility() {
    this.showMessages = !this.showMessages;
  }

  updateLengthStatus() {
    const hasErrors = this.getLengthStatus();
    this.setHintStatus('length', hasErrors);
  }

  updateRequiredStatus() {
    const hasErrors = this.getRequiredStatus();
    this.setWarningStatus('required', hasErrors);
  }

  updateRequirementsStatus() {
    const hasErrors = this.warningsArePresent;
    this.setWarningStatus('requirements', hasErrors);
  }

  get warningsArePresent() {
    const hasErrors = this.getLengthStatus() ||
      this.getRequiredStatus();
    const isTouched =  this.username.touched;
    return hasErrors && isTouched;
  }

  getLengthStatus() {
    return (
      this.username.hasError('minlength') ||
      this.username.hasError('maxlength') ||
      this.length === 0);
  }

  getRequiredStatus() {
    return this.username.hasError('required')
  }

  setHintStatus(key: string, hasErrors: boolean) {
    const selectedHint = this.hints.find(hint => hint.key === key);
    hasErrors ? selectedHint.resolved = false : selectedHint.resolved = true;
  }

  setWarningStatus(key: string, hasErrors: boolean) {
    const selectedWarning = this.warnings.find(warning => warning.key === key);
    hasErrors ? selectedWarning.resolved = false : selectedWarning.resolved = true;
  }
}
