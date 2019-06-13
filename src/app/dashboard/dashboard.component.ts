import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  services = [];
  my_services = [];
  services_done = [];
  services_progress = [];
  services_waiting = [];
  servicesToPass = [];

  status = '';

  isActive = new Map<string, boolean>();

  constructor(private userService: UserService,
              private serviceService: ServiceService) { }

  ngOnInit() {
    this.isActive['services'] = true;
    this.isActive['services_done'] = false;
    this.isActive['services_progress'] = false;
    this.isActive['services_waiting'] = false;

    this.serviceService.getServices().on('value',snap => {
      for(let key in snap.val()) for(let key2 in snap.val()[key]){
        let serv = snap.val()[key][key2];
        this.services.push(...serv.filter( service => service.fromUser === this.userService.uid || service.toUser === this.userService.uid))
      }

      this.my_services = this.services.filter( service => service.status === 'my_service' && service.fromUser === this.userService.uid);
      this.services_done = this.services.filter( service => service.status === 'done' && service.toUser === this.userService.uid);
      this.services_waiting = this.services.filter( service => service.status === 'waiting' && service.toUser === this.userService.uid);
      this.services_progress = this.services.filter( service => service.status === 'processing' && service.fromUser === this.userService.uid);
      this.servicesToPass = this.my_services;
    });
  }

  changeStatus(text: string) {
    console.log(text);
    this.isActive['services'] = false;
    this.isActive['services_done'] = false;
    this.isActive['services_progress'] = false;
    this.isActive['services_waiting'] = false;
    this.isActive[text] = true;
    this.status = text;
    switch(text){
      case 'services':{
        this.servicesToPass = this.my_services;
        console.log('services');
        break;
      }
      case 'services_done': {
        this.servicesToPass = this.services_done;
        console.log('done');
        break;
      }
      case 'services_progress': {
        this.servicesToPass = this.services_progress;
        console.log('progress');
        break;
      }
      case 'services_waiting': {
        this.servicesToPass = this.services_waiting;
        console.log('waiting');
        break;
      }
    }

  }
}
