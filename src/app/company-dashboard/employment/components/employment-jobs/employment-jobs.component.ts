import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../shared/interfaces/link.interface';

@Component({
  selector: 'app-employment-jobs',
  templateUrl: './employment-jobs.component.html',
  styleUrls: ['./employment-jobs.component.scss']
})
export class EmploymentJobsComponent implements OnInit {

  links: Link[];

  ngOnInit() {
    this.getPanelLinks()
  }

  getPanelLinks() {
    this.links = [
      {
        name: 'EN RECLUTAMIENTO',
        status: true,
        link: ''
      },
      {
        name: 'FINALIZADAS',
        status: false,
        link: ''
      }];
  }
}
