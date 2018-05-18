import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../shared/interfaces/link.interface';
import { CompanyUserService } from '../../../../core/services/company-user.service';

@Component({
  selector: 'app-employment-agent-container',
  templateUrl: './employment-agent-container.component.html',
  styleUrls: ['./employment-agent-container.component.scss']
})
export class EmploymentAgentContainerComponent implements OnInit {

  links: Link[];

  jobs$ = this.companyUserService.getJobs();

  constructor(private companyUserService: CompanyUserService) { }

  ngOnInit() {
    this.getPanelLinks();
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
