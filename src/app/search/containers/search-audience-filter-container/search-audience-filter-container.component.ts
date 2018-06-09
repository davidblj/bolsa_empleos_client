import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Option } from '../../shared/option.interface';
import { AuthService } from '../../../core/services/auth.service';
import { APPRENTICE, BOTH, GRADUATE, Roles } from '../../../shared/utils/globals.variables';

@Component({
  selector: 'app-search-audience-filter-container',
  templateUrl: './search-audience-filter-container.component.html',
  styleUrls: ['./search-audience-filter-container.component.scss']
})
export class SearchAudienceFilterContainerComponent implements OnInit {

  @Output()
  onOptionSelected = new EventEmitter<string>();

  audienceCategory = 'Audiencia';
  audienceCategoryOptions: Option[] = [
    {name: 'Practicante', selected: false },
    {name: 'Egresado', selected: false },
    {name: 'Ambos', selected: false }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit() {

    const userRole: Roles = this.authService.getRole();
    this.setDefaultType(userRole);
  }

  setDefaultType(userRole: Roles | null) {

    if (userRole) {

      if (userRole === Roles.Student) {
        this.findAndModify(APPRENTICE, true);
        this.findAndModify(BOTH, true);
      }

      if (userRole === Roles.Graduate) {
        this.findAndModify(GRADUATE, true);
        this.findAndModify(BOTH, true);
      }
    }
  }

  findAndModify(name: string, selectedStatus: boolean) {

    let foundIndex = -1;
    this.audienceCategoryOptions.forEach((value, index) => {
      if (value.name === name) {
        foundIndex = index;
      }
    });

    if (foundIndex >= 0) {
      const optionToModify = this.audienceCategoryOptions[foundIndex];
      optionToModify.selected = selectedStatus;
    }
  }

  emitOptionSelected(value: string) {
    this.onOptionSelected.emit(value);
  }
}
