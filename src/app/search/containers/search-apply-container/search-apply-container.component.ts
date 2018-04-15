import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-apply-container',
  templateUrl: './search-apply-container.component.html',
  styleUrls: ['./search-apply-container.component.scss']
})
export class SearchApplyContainerComponent {

  _jobId: string;

  @Input()
  set jobId(jobId: string) {

    // apply service
    this._jobId = jobId;
  }
}
