import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

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
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
