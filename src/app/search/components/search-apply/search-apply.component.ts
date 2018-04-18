import { Component, EventEmitter, Input, Output } from '@angular/core';

// classes
import { Job } from '../../../shared/interfaces/job.interface';

@Component({
  selector: 'app-search-apply',
  templateUrl: './search-apply.component.html',
  styleUrls: ['./search-apply.component.scss']
})
export class SearchApplyComponent  {

  @Input()
  job: Job;

  @Input()
  applyingStatus: boolean;

  @Output()
  apply = new EventEmitter<any>();

  buttonShape = 'square';

  get buttonColor() {
    return this.applyingStatus ? 'transparent' : 'dark';
  }

  get buttonHoverColor() {
    return this.applyingStatus ? 'none' : 'transparent';
  }

  get buttonMessage() {
    return this.applyingStatus ? 'APLICANDO' : 'APLICAR AHORA';
  }

  onSubmit() {
    this.apply.emit();
  }
}
