import { Component, EventEmitter, Input, Output } from '@angular/core';

// interfaces
import { CandidateSnippet } from '../../shared/candidate.interface';

@Component({
  selector: 'app-employment-job-details',
  templateUrl: './employment-job-details.component.html',
  styleUrls: ['./employment-job-details.component.scss']
})
export class EmploymentJobDetailsComponent {

  @Input()
  candidates: CandidateSnippet[];

  @Output()
  download = new EventEmitter<CandidateSnippet>();

  onClick(index: number) {
    const candidate = this.candidates[index];
    this.download.emit(candidate);
  }
}
