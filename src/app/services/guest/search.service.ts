import { Injectable } from '@angular/core';
import { Restangular} from 'ngx-restangular';
import { Observable} from 'rxjs/Observable';


@Injectable()
export class SearchService {

  constructor(private restangular: Restangular) { }

  getAllAvailableOffers(): Observable<any> {
    return this.restangular.all('guest/getAvailableOffers').getList();
  }
}