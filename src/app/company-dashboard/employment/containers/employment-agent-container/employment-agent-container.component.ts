import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../shared/interfaces/link.interface';
import { CompanyUserService, jobTypes } from '../../../../core/services/company-user.service';

@Component({
  selector: 'app-employment-agent-container',
  templateUrl: './employment-agent-container.component.html',
  styleUrls: ['./employment-agent-container.component.scss']
})
export class EmploymentAgentContainerComponent implements OnInit {

  EN_RECLUTAMIENTO = 'EN RECLUTAMIENTO';
  FINALIZADAS = 'FINALIZADAS';

  links: Link[];
  pageLimit = 1;

  jobs$ = this.companyUserService.getPostedJobs(jobTypes.active);

  constructor(private companyUserService: CompanyUserService) { }

  ngOnInit() {
    this.getPanelLinks();
  }

  getPanelLinks() {

    this.links = [
      {
        name: this.EN_RECLUTAMIENTO,
        status: true
      },
      {
        name: this.FINALIZADAS,
        status: false
      }];
  }

  onLinkChangedHandler(name: string) {

    if (name === this.EN_RECLUTAMIENTO) {
      this.jobs$ = this.companyUserService.getPostedJobs(jobTypes.active);
    }

    if (name === this.FINALIZADAS) {
      this.jobs$ = this.companyUserService.getPostedJobs(jobTypes.disabled);
    }
  }
}
