import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../../shared/utils/custom-validators.functions';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {

  @Output()
  onSalarySet = new EventEmitter<string>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      min: [
        '0',
        CustomValidators.isNumeric
      ],
      max: [
        '10',
        CustomValidators.isNumeric
      ]
    });

    this.watchForChanges();
  }

  watchForChanges() {

    this.form.valueChanges.subscribe(() => {

      if (this.form.valid) {

        let range, min, max;
        min = this.form.get('min').value;
        max = this.form.get('max').value;
        range = `${min}..${max}`;

        this.emitOnSalarySet(range);
      }
    })
  }

  emitOnSalarySet(range: string) {
    this.onSalarySet.emit(range);
    console.log(range);
  }
}
