import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-apply',
  templateUrl: './search-apply.component.html',
  styleUrls: ['./search-apply.component.scss']
})
export class SearchApplyComponent  {

  @Input()
  jobId: string;

  buttonColor = 'dark';
  buttonShape = 'square';
}
