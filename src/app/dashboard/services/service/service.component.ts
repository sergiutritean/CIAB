import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../../shared/service.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  @Input() service: Service;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
