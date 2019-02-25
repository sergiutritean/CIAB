import { Component, OnInit, Input } from '@angular/core';
import { ServiceModel } from 'src/app/shared/service.model';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  @Input() service: ServiceModel;

  amount: number = 0;
  label: string = '';
  isOpen: boolean = false;

  constructor() {

  }

  ngOnInit() {
    console.log(this.service);
    this.amount = this.service.price;
    this.label = this.service.title;
  }

  openPayment() {
    this.isOpen = true;
  }

}
