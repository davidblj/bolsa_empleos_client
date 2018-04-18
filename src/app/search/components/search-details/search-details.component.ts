import { Component, Input } from '@angular/core';

// classes
import { Job } from '../../../shared/interfaces/job.interface';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent {

  @Input()
  job: Job;
}
