import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from '../../../shared/option.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input()
  category: string;

  @Input()
  options: Option[];

  @Output()
  onCategorySelected = new EventEmitter<string>();

  hidden = false;
  queryValue = [];

  ngOnInit() {
  }

  toggleContent() {
    this.hidden = !this.hidden;
  }

  toggleCheckBox(option) {

    this.options.forEach((value, index) => {

      if (value.name === option.name) {

        this.options[index].selected = !this.options[index].selected;
        const status = this.options[index].selected;

        if (status) {
          this.queryValue.push(option.name);
        } else {
          this.removeOptionFromQuery(option.name);
        }

        this.emitCategorySelected();
      }
    });
  }

  emitCategorySelected() {
    const parsedQueryValue = this.queryValue.join(',');
    this.onCategorySelected.emit(parsedQueryValue);
    console.log(parsedQueryValue);
  }

  removeOptionFromQuery(name: string) {

    let position = -1;
    this.queryValue.forEach((value, index) => {
      if (value === name) {
        position = index;
      }
    });

    if (position >= 0) {
      this.queryValue.splice(position, 1);
    }
  }

  shouldNotDisplaySelectedBlock(option) {
    return this.options.some(value => {
      return (
        value.name === option.name &&
        !value.selected);
    });
  }

  get shouldNotFold() {
    return this.hidden;
  }
}
