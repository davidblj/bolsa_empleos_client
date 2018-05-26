import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output()
  onInputChanged = new EventEmitter<string>();

  control = new FormControl();

  constructor() { }

  ngOnInit() {
    this.watchFormControl();
  }

  watchFormControl() {
    this.control.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchString => {
        this.emitOnInputChanged(searchString)
      })
  }

  emitOnInputChanged(searchString: string) {
    this.onInputChanged.emit(searchString);
  }
}
