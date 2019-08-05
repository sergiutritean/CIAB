import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ServiceModel } from 'src/app/shared/service.model';
import { UserService } from 'src/app/shared/services/user.service';
import {PendingModel} from "../pending.model";
import {TransServiceModel} from "../transService.model";

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
    console.log(services,url);
    return firebase.database().ref(url).update(services);
  }

  whenBuyService( pending: PendingModel ) {
    let transService = new TransServiceModel(
      pending.type,
      pending.uidService,
      'in_progress',
      pending.fromUser,
      pending.toUser,
      pending.pictureFromUser,
      pending.pictureToUser,
      pending.price,
      new Date()
    );
    this.userService.getTransService().push(transService);
  }

  addImage(url, image) {
    return firebase.storage().ref(url).put(image);
  }

  getServices(...args) {
    if(args) return firebase.database().ref('services/'+args);
    return firebase.database().ref('services');
  }

  getService(userUID,serviceUID){
    return firebase.database().ref('services/'+userUID+'/'+serviceUID);
  }

  modifyService(userUID,serviceUID,data){
    firebase.database().ref('services/'+userUID+'/'+serviceUID).set(data);
  }

  getDatabase() {
    return firebase.database().ref();
  }

  async convertUIDtoName(uidService: string, uidUser: string){
    console.log(uidService,uidUser);
    let name = '';
    this.getServices().once('value', snap => {
      let services = snap.val();
      for(let key in services) if(services[key][uidService]){
        name = services[key][uidService][0].title;
        return;
      }
    });
    console.log(name);
    return name;
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
