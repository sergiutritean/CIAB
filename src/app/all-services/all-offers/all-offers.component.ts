import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.scss']
})
export class AllOffersComponent implements OnInit {

  @Input() services;



  constructor() { }

  ngOnInit() {
    console.log(this.services);
  }

}
