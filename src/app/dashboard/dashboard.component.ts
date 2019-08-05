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
  servicesToPass = [];
  status = '';

  offer_services = [];
  offer_pendings = [];
  offer_progress = [];
  offer_done = [];

  request_services = [];
  request_pendings = [];
  request_waiting = [];
  request_done = [];

  isActive = new Map<string, boolean>();

  constructor(private userService: UserService,
              private serviceService: ServiceService) { }

  ngOnInit() {

    this.serviceService.getDatabase().on('value',snap => {
      let allServices = snap.val()['services'];
      let allPendings = snap.val()['pendings'];
      let allTransServices = [];
      let transServices = snap.val()['trans_service'];
      for(let key in transServices)
        allTransServices.push(transServices[key]);

      console.log(allServices,allPendings,allTransServices);

      ///Add all services
      for(let key in allServices) for(let key2 in allServices[key]) {
        let serv = allServices[key][key2];
        if(!serv) continue;
        this.services.push(...serv.filter(service =>
          service.fromUser === this.userService.uid ||
          service.toUser === this.userService.uid
        ));
      }

      ///Add all pendings
      if(allPendings){
        allPendings = allPendings.filter( pending =>
          pending.fromUser === this.userService.uid ||
          pending.toUser === this.userService.uid
        );
      }

      console.log(allPendings);

      // offer_services
      this.offer_services = this.services.filter(service =>
          service.status === 'my_service' &&
          service.fromUser === this.userService.uid &&
          service.isOffer=='offer');

      // offer_pendings
      if(allPendings){
        this.offer_pendings = allPendings.filter( pending =>
          (pending.toUser == this.userService.uid && pending.type === 'offer') ||
          (pending.fromUser == this.userService.uid && pending.type == 'request')
        );
      }

      // offer_progress
      if(allTransServices){
        this.offer_progress = allTransServices.filter(
          service => service.status === 'in_progress' &&
            ((service.toUser == this.userService.uid && service.type === 'offer') ||
              (service.fromUser == this.userService.uid && service.type == 'request'))
        );
      }

      // offer_done
      if(allTransServices){
        this.offer_done = allTransServices.filter(service =>
          service.status === 'done' && (
          (service.toUser == this.userService.uid && service.type === 'offer') ||
          (service.fromUser == this.userService.uid && service.type == 'request'))
        );
      }

      // request_services
      this.request_services = this.services.filter(service =>
        service.status === 'my_service' &&
        service.fromUser === this.userService.uid &&
        service.isOffer=='request');

      // request_pendings
      if(allPendings){
        this.request_pendings = allPendings.filter( pending =>
          (pending.toUser == this.userService.uid && pending.type == 'request') ||
          (pending.fromUser == this.userService.uid && pending.type === 'offer')
        );
      }

      // request_waiting
      if(allTransServices){
        this.request_waiting = allTransServices.filter( service =>
          service.status === 'in_progress' &&
          ((service.toUser == this.userService.uid && service.type == 'request') ||
            (service.fromUser == this.userService.uid && service.type === 'offer'))
        );
      }

      // request_done
      if(allTransServices){
        this.request_done = allTransServices.filter(service =>
          service.status === 'done' &&
          ((service.toUser == this.userService.uid && service.type == 'request') ||
            (service.fromUser == this.userService.uid && service.type === 'offer'))
        );
      }

    });
  }

  switchOffers(text: string){
    this.isActive[''] = false;
    this.isActive['offer_services'] = false;
    this.isActive['offer_progress'] = false;
    this.isActive['offer_pendings'] = false;
    this.isActive['offer_done'] = false;
    this.isActive[text] = true;
    this.status = text;
    switch(text){
      case 'offer_services':{
        console.log(this.offer_services);
        this.servicesToPass = this.offer_services;
        console.log(text);
        break;
      }
      case 'offer_pendings': {
        this.servicesToPass = this.offer_pendings;
        console.log(text);
        break;
      }
      case 'offer_progress': {
        this.servicesToPass = this.offer_progress;
        console.log(text);
        break;
      }
      case 'offer_done': {
        this.servicesToPass = this.offer_done;
        console.log(text);
        break;
      }
    }
  }

  switchRequests(text: string){
    console.log(this.request_waiting);
    console.log(text);
    this.isActive[text] = true;
    this.isActive['request_services'] = false;
    this.isActive['request_waiting'] = false;
    this.isActive['request_pendings'] = false;
    this.isActive['request_done'] = false;
    this.isActive[text] = true;
    this.status = text;
    switch(text){
      case 'request_services': {
        this.servicesToPass = this.request_services;
        console.log(this.request_services);
        console.log(text);
        break;
      }
      case 'request_pendings':{
        this.servicesToPass = this.request_pendings;
        console.log(text);
        break;
      }
      case 'request_waiting': {
        this.servicesToPass = this.request_waiting;
        console.log(text);
        break;
      }
      case 'request_done': {
        this.servicesToPass = this.request_done;
        console.log(text);
        break;
      }
    }
  }
  changeStatus(text: string) {
    console.log(text);
    if(text=='cereri') {
      this.isActive[text] = true;
      this.isActive['oferte'] = false;
      this.switchRequests('request_services');
    } else if(text == 'oferte') {
      this.isActive[text] = true;
      this.isActive['cereri'] = false;
      this.switchOffers('offer_services');
    }
  }

  statusIsPending(){
    return !(this.status == 'offer_services' || this.status == 'request_services');
  }
}
