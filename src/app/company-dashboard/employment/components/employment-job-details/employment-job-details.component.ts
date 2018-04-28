import { Component, EventEmitter, Input, Output } from '@angular/core';

// interfaces
import { Candidate } from '../../shared/candidate.interface';

@Component({
  selector: 'app-employment-job-details',
  templateUrl: './employment-job-details.component.html',
  styleUrls: ['./employment-job-details.component.scss']
})
export class EmploymentJobDetailsComponent {

  @Input()
  candidates: Candidate[];

  @Output()
  download = new EventEmitter<Candidate>();

  onClick(index: number) {
    const candidate = this.candidates[index];
    this.download.emit(candidate);
  }
}
