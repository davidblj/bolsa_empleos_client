import { Component, Input, OnInit } from '@angular/core';
import { PaginatorComponent } from '../../../../shared/components/paginator/paginator.component';

@Component({
  selector: 'app-employment-pagination',
  templateUrl: './employment-pagination.component.html',
  styleUrls: ['./employment-pagination.component.scss']
})
export class EmploymentPaginationComponent extends PaginatorComponent implements OnInit {

  @Input()
  range = 3;

  pages = [];
  activePosition = 1;

  constructor() {
    super();
  }

  ngOnInit() {
    for (let i = 1; i <= this.range; i++) {
      this.pages.push(i);
    }
  }

  isActive(index: number): boolean {
    return (index + 1) === this.activePosition;
  }

  isDisabled(page: number): boolean {
    return page > this.pageLimit;
  }

  onClickHandler(page: number, index: number) {

    if (!this.isDisabled(page)) {

      this.currentPage = page - 1;
      const offset = (index + 1) - this.activePosition;
      this.emitCurrentPage(offset);
    }
  }

  emitCurrentPage(offset: number) {
    this.page.emit(offset);
    this.updateActivePosition(offset);
    this.updatePageArray(offset);
  }

  updatePageArray(offset: number) {

    if (offset > 0) {

      const lastPage = this.pages[this.pages.length - 1];
      const boundaryOffset = (this.currentPage + 1) - lastPage;
      const offsetIsOutOfBoundary = boundaryOffset === 1;

      if (offsetIsOutOfBoundary) {
        this.pages = this.pages.map(value => value + 1);
      }
    }

    if (offset < 0) {

      const firstPage = this.pages[0];
      const boundaryOffset = (this.currentPage + 1) - firstPage;
      const offsetIsOutOfBoundary = boundaryOffset === -1;

      if (offsetIsOutOfBoundary) {
        this.pages = this.pages.map(value => value - 1);
      }
    }
  }

  updateActivePosition(offset: number) {

    const position = this.activePosition + offset;
    const positionIsInBoundary = position <= this.range &&
                                 position > 0;
    if (positionIsInBoundary) {
      this.activePosition += offset;
    }
  }
}
