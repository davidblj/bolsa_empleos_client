import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input()
  pageLimit = 10;

  @Output()
  page = new EventEmitter<number>();

  currentPage = 0;

  goBackward() {

    if (this.canGoBackwards) {
      this.currentPage = this.currentPage - 1;
      this.emitCurrentPage();
    }
  }

  goForward() {

   if (this.canGoForward) {
     this.currentPage = this.currentPage + 1;
     this.emitCurrentPage();
   }
  }

  get canGoForward() {
    return (this.currentPage + 1 <= this.pageLimit);
  }

  get canGoBackwards() {
    return (this.currentPage - 1 >= 0);
  }

  emitCurrentPage() {
    this.page.emit(this.currentPage);
  }
}
