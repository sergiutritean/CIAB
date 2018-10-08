import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ServiceModel } from 'src/app/shared/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getUniqueID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  addService(service: ServiceModel) {
    const url = 'services/' + service.fromUser + '/' + service.uid;
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

  getServices() {
    return firebase.database().ref('services');
  }

}
