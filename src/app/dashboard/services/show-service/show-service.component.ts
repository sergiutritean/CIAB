import { Component, Input, OnInit } from '@angular/core';
import { ServiceModel } from '../../../shared/service.model';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.scss']
})
export class ShowServiceComponent implements OnInit {

  @Input() service: ServiceModel;

  constructor() { }

  ngOnInit() {
    console.log(this.service);
  }

}
