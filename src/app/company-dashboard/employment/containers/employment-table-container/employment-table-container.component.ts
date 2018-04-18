import { Component } from '@angular/core';
import { CompanyUserService } from '../../../../core/services/company-user.service';

@Component({
  selector: 'app-employment-table-container',
  templateUrl: './employment-table-container.component.html',
  styleUrls: ['./employment-table-container.component.scss']
})
export class EmploymentTableContainerComponent {

  jobs$ = this.companyUserService.getJobs();

  constructor(private companyUserService: CompanyUserService) { }
}
