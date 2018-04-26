import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  download = new EventEmitter<string>();

  onClick(id: string) {
    this.download.emit(id);
  }
}
