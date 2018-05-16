import { Component, Input, OnInit } from '@angular/core';
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

  hidden = false;

  ngOnInit() {
  }

  toggleContent() {
    this.hidden = !this.hidden;
  }

  toggleCheckBox(option) {
    this.options.forEach((value, index) => {
      if (value.name === option.name) {
        this.options[index].selected = !this.options[index].selected;
      }
    });
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
