import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input()
  type = 'large';

  transparentLeftArrow = 'assets/icons/paginator/left-arrow-transparent.svg';
  solidLeftArrow = 'assets/icons/paginator/left-arrow.svg';
  leftArrowUrl = this.transparentLeftArrow;

  transparentRightArrow = 'assets/icons/paginator/right-arrow-transparent.svg';
  solidRightArrow = 'assets/icons/paginator/right-arrow.svg';
  rightArrowUrl = this.transparentRightArrow;

  getTypeStatus(type: string) {
    return type === this.type;
  }

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
