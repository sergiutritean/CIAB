import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() onFilter = new EventEmitter<any>();

  form = new FormGroup({
    service_type: new FormControl(''),
    title: new FormControl(''),
    loc: new FormControl(''),
    barter: new FormControl(''),
    price: new FormGroup({
      min: new FormControl(''),
      max: new FormControl('')
    }),
    all: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
    this.form.patchValue({'barter': false, 'all': false});
  }

  onSubmit() {
    console.log(this.form.value);
    this.onFilter.emit(this.form.value);
  }

}
