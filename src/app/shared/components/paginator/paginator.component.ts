import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input()
  pageLimit;

  @Output()
  page = new EventEmitter<number>();

  currentPage = 0;

  goBackward() {

    if (this.canGoBackwards) {
      this.currentPage = this.currentPage - 1;
      this.emitCurrentPage(-1);
    }
  }

  goForward() {

   if (this.canGoForward) {
     this.currentPage = this.currentPage + 1;
     this.emitCurrentPage(1);
   }
  }

  get canGoForward() {
    return (this.currentPage + 1 < this.pageLimit);
  }

  get canGoBackwards() {
    return (this.currentPage - 1 >= 0);
  }

  emitCurrentPage(offset: number) {
    this.page.emit(offset);
  }
}
