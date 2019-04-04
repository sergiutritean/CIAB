import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ServiceModel } from 'src/app/shared/service.model';
import { UserService } from 'src/app/shared/services/user.service';
import {toast} from "angular2-materialize";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private userService: UserService) { }

  getUniqueID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  addService(service: ServiceModel, where: string) {
    const url = 'services/' + where + '/' + service.uid;
    let services = [];
    firebase.database().ref(url).once( 'value', snap => {
      services = snap.val();
    });
    if(!services) services = [];
    services.push(service);
    return firebase.database().ref(url).update(services);
  }

  addImage(url, image) {
    return firebase.storage().ref(url).put(image);
  }

  getServices(...args) {
    if(args) return firebase.database().ref('services/'+args);
    return firebase.database().ref('services');
  }

  whenBuy(service: ServiceModel) {
    this.addService(service, this.userService.uid);
    service.status = 'progress';
    this.addService(service, service.fromUser);
    toast('Service purchased succesfully!', 2000);
  }

}
