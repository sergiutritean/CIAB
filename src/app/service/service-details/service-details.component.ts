import { Component, OnInit, Input } from '@angular/core';
import { ServiceModel } from 'src/app/shared/service.model';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  @Input() service: ServiceModel;

  constructor() { }

  ngOnInit() {
    console.log(this.service);
  }

}
