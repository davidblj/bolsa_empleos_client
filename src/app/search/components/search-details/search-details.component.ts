import { Component, Input } from '@angular/core';

// classes
import { Job } from '../../../shared/interfaces/job.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent {

  @Input()
  job: Job;

  baseURL = environment.baseURL;

  get iconThumbnail() {
    return `${this.baseURL}/companies/${this.job.owner}/thumbnail`;
  }
}
