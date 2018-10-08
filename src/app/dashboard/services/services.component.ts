import { Component, Input, OnInit } from '@angular/core';
import { ServiceModel } from 'src/app/shared/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input() services: ServiceModel;

  constructor() { }

  ngOnInit() {
  }

}
