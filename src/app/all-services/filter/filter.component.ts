import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() category;

  @Output() onFilter = new EventEmitter<any>();

  categories: string[];
  categoriesToShow: string[];

  form = new FormGroup({
    service_type: new FormGroup({
      offer: new FormControl(''),
      request: new FormControl('')
    }),
    title: new FormControl(''),
    loc: new FormControl(''),
    barter: new FormControl(''),
    only_barter: new FormControl(''),
    price: new FormGroup({
      min: new FormControl(''),
      max: new FormControl('')
    }),
    all: new FormControl(''),
    category: new FormControl('')
  });

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.form.patchValue({
      'barter': false,
      'only_barter': false,
      'all': false,
      'service_type':{
        'offer': true,
        'request': true
      },
      'category': this.category
    });
    this.userService.getCategories().on('value', snap => {
      this.categories = snap.val();
    });
  }

  onSubmit() {
    console.log(this.form.value);
    let ans = this.form.value;
    if(!ans.service_type.offer) ans.service_type.offer = false;
    if(!ans.service_type.request) ans.service_type.request = false;
    this.onFilter.emit(this.form.value);
  }

  search(event) {
    this.categoriesToShow = this.categories.filter( category => {
      const s1 = category.toLowerCase();
      const s2 = event.query.toLowerCase();
      return s1.search(s2) === 0;
    });
  }

}
