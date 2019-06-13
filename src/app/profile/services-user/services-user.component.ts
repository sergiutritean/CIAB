import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../shared/services/service.service";
import {ServiceModel} from "../../shared/service.model";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-services-user',
  templateUrl: './services-user.component.html',
  styleUrls: ['./services-user.component.scss']
})
export class ServicesUserComponent implements OnInit {

  services: ServiceModel[] = [];
  constructor(private serviceService: ServiceService,
              private userService: UserService) { }

  ngOnInit() {
    this.serviceService.getServices(this.userService.uid).on('value', snap => {
      console.log(snap.val());
      for(let key in snap.val()){
        this.services.push(...snap.val()[key].filter(service => service.status === 'my_service'));
        console.log(key, snap.val(), snap.val()[key][0]);
      }
    });
    console.log(this.services);
  }


}
