import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-offer-input',
  templateUrl: './job-offer-input.component.html',
  styleUrls: ['./job-offer-input.component.scss']
})
export class JobOfferInputComponent implements OnInit {

  @Input()
  fieldName: string;

  @Input()
  type = 'input';

  ngOnInit() {
  }

  isType(type: string): boolean {
    return type === this.type;
  }
}
