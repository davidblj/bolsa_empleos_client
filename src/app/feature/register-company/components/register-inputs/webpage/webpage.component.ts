import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Error } from '../../../shared/error.interface';
import { Manager } from '../../../shared/manager.model';
import { definitions } from '../../../shared/definitions.variables';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss']
})
export class WebpageComponent implements OnInit {

  @Input()
  parent: FormGroup;

  hints: Error[];
  warnings: Error[];

  fieldName = 'Pagina web';
  website: AbstractControl;
  validationManager: Manager;

  ngOnInit() {
    this.website = this.parent.get('website');
    this.website.markAsUntouched();
    this.initErrorMessaging();
  }

  initErrorMessaging() {

    this.hints = [
      definitions.website()
    ];

    this.warnings = [
      definitions.required(),
      definitions.requirements()
    ];

    this.validationManager = new Manager(
      this.hints,
      this.warnings,
      this.website
    )
  }

  onInput(value: string) {
    this.website.setValue(value);
    this.updateRequiredStatus();
    this.updateWebSiteStatus();
    this.updateRequirementsStatus();
  }

  onTouch() {
    this.website.markAsTouched();
  }

  updateWebSiteStatus() {
    this.validationManager.updateWebSiteStatus();
  }

  updateRequiredStatus() {
    this.validationManager.updateRequiredStatus();
  }

  updateRequirementsStatus() {
    this.validationManager.updateRequirementsStatus();
  }

  get displayWarnings() {
    return this.validationManager.displayWarnings();
  }
}
