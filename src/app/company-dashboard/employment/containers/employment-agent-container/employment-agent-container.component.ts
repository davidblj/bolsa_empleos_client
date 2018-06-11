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

  hintTitle ;
  hintMessage;

  constructor(private companyUserService: CompanyUserService) { }

  ngOnInit() {
    this.setDefaultHintMessage();
    this.getPanelLinks();
  }

  getPanelLinks() {
    this.links = [this.EN_RECLUTAMIENTO, this.FINALIZADAS]
  }

  onLinkChangedHandler(name: string) {

    if (name === this.EN_RECLUTAMIENTO) {
      this.jobs$ = this.companyUserService.getPostedJobs(jobTypes.active);
      this.setDefaultHintMessage();
    }

    if (name === this.FINALIZADAS) {
      this.jobs$ = this.companyUserService.getPostedJobs(jobTypes.disabled);
      this.hintTitle = 'Por el momento ninguna oferta que tu hayas publicado, ha terminado su periodo de reclutamiento';
      this.hintMessage = 'las ofertas que hayan culminado, dejarán de ser visibles para que tu inicies el proceso de selección';
    }
  }

  setDefaultHintMessage() {
    this.hintTitle = 'Por el momento no tienes ninguna oferta abierta hacia la comunidad académica';
    this.hintMessage = 'publica tus ofertas en \'Nueva Oferta\' del panel lateral izquierdo';
  }
}
