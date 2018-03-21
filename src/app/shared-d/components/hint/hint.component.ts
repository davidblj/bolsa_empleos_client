import { Component, Input, OnInit } from '@angular/core';
import { Error } from '../../interfaces/error.interface';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {

  @Input()
  hints: Error[];

  constructor() { }

  ngOnInit() {
  }

}
