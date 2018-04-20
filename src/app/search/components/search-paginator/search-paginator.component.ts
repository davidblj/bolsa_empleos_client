import { Component } from '@angular/core';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';

@Component({
  selector: 'app-search-paginator',
  templateUrl: './search-paginator.component.html',
  styleUrls: ['./search-paginator.component.scss']
})
export class SearchPaginatorComponent extends PaginatorComponent {

  transparentLeftArrow = 'assets/icons/paginator/left-arrow-transparent.svg';
  solidLeftArrow = 'assets/icons/paginator/left-arrow.svg';
  leftArrowUrl = this.transparentLeftArrow;

  transparentRightArrow = 'assets/icons/paginator/right-arrow-transparent.svg';
  solidRightArrow = 'assets/icons/paginator/right-arrow.svg';
  rightArrowUrl = this.transparentRightArrow;

  toggleLeftArrow() {

    if (this.leftArrowUrl === this.transparentLeftArrow) {
      this.leftArrowUrl = this.solidLeftArrow;
    } else {
      this.leftArrowUrl = this.transparentLeftArrow;
    }
  }

  toggleRightArrow() {

    if (this.rightArrowUrl === this.transparentRightArrow) {
      this.rightArrowUrl = this.solidRightArrow;
    } else {
      this.rightArrowUrl = this.transparentRightArrow;
    }
  }

}
