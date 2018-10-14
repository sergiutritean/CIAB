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
    service_type: new FormGroup({
      offer: new FormControl(''),
      request: new FormControl('')
    }),
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
    this.form.patchValue({
      'barter': false,
      'all': false,
      'service_type':{
        'offer': true,
        'request': true
      },
    });
  }

  onSubmit() {
    console.log(this.form.value);
    let ans = this.form.value;
    if(!ans.service_type.offer) ans.service_type.offer = false;
    if(!ans.service_type.request) ans.service_type.request = false;
    this.onFilter.emit(this.form.value);
  }

}
