import { AbstractControl } from '@angular/forms';
import { Manager } from '../classes/manager.class';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

const checkField = (control: AbstractControl,
                    getBlockingStatus,
                    checkStatusTask,
                    validationManager: Manager) => {

  control.valueChanges
    .filter(() => {

      const shouldBlock = getBlockingStatus();
      if (shouldBlock) { validationManager.updateAsyncStatus(true); }
      return !shouldBlock;
    })
    .debounceTime(500)
    .switchMap(checkStatusTask)
    .subscribe((flag: boolean) => {

      // even if its blocking, the last subscribe will exec
      // due to the delay in the http request
      const shouldBlock = getBlockingStatus();
      if (!shouldBlock) {
        validationManager.updateAsyncStatus(flag);
      }
    })
};

export const asyncValidator = {
  checkField
};
