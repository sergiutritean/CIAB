import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ServiceModel } from 'src/app/shared/service.model';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private userService: UserService) { }

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

  whenBuyService( service: ServiceModel ) {
    //Add to buyer
    const url2: any[] = ['services/' + this.userService.uid + '/' + service.uid,
                        'services/' + service.fromUser + '/' + service.uid];
    const status: any[] = ['waiting', 'processing'];
    service.toUser = this.userService.uid;
    if( !service.isOffer ){
      let aux = service.toUser;
      service.toUser = service.fromUser;
      service.fromUser = aux;
    }
    url2.forEach( (url, i) => {
      let services = [];
      let copy = service;
      copy.status = status[i];
      firebase.database().ref(url).once( 'value', snap => {
        services = snap.val();
      });
      if(!services) services = [];
      services.push(service);
      firebase.database().ref(url).set(services);
    });
  }

  addImage(url, image) {
    return firebase.storage().ref(url).put(image);
  }

  getServices(...args) {
    if(args) return firebase.database().ref('services/'+args);
    return firebase.database().ref('services');
  }


  get_all_service_keys(userUID: string):any {
    let goodServices = [];
    this.getServices(userUID).on('value', snap => {
      console.log(snap.val());
      for(let key in snap.val()) {
        goodServices.push(...snap.val()[key].filter(service => service.status === 'my_service'));
      }
      console.log(goodServices);
      return goodServices;
    })
  }
}
