import { Injectable } from '@angular/core';
import { Restangular} from 'ngx-restangular';
import { Company} from '../../models/organizacion/company';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class CompanyService {

  constructor(private restangular: Restangular) {}

  // todo(refactoring): search in to "typed object validation" with typescript
  getEmpresas(): Observable<Company[]> {

    return this.restangular.all('company/listarEmpresas').getList();
  }

  // todo: move this request to a shared module
  getCompanyDetails(companyName: string): Observable<any> {

    return this.restangular.one('/guest/getCompanyDetails').get({'companyName': companyName});
  }
}
