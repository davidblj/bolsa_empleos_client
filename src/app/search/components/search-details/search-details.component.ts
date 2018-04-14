import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../shared/job.interface';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {

  @Input()
  job: Job;

  ngOnInit() {
  }

}
