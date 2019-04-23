import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { ServiceModel } from '../../../shared/service.model';
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.scss']
})
export class ShowServiceComponent implements OnInit {

  @Input() service: ServiceModel;
  @Input() status: string;
  modalActions = new EventEmitter<string|MaterializeAction>();
  constructor() { }

  ngOnInit() {
    console.log(this.service);
  }

  openModal() {
    console.log(this.status);
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  finishService(){

  }

}
