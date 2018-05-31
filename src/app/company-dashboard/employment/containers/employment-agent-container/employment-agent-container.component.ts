import { Component, OnInit } from '@angular/core';
import { CompanyUserService, jobTypes } from '../../../../core/services/company-user.service';

@Component({
  selector: 'app-employment-agent-container',
  templateUrl: './employment-agent-container.component.html',
  styleUrls: ['./employment-agent-container.component.scss']
})
export class EmploymentAgentContainerComponent implements OnInit {

  EN_RECLUTAMIENTO = 'EN RECLUTAMIENTO';
  FINALIZADAS = 'FINALIZADAS';

  links;
  pageLimit = 1;
  jobs$ = this.companyUserService.getPostedJobs(jobTypes.active);

  constructor(private companyUserService: CompanyUserService) { }

  ngOnInit() {
    this.getPanelLinks();
  }

  getPanelLinks() {
    this.links = [this.EN_RECLUTAMIENTO, this.FINALIZADAS]
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
