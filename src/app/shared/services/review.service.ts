import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {ServiceService} from "./service.service";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  afterPurchase: boolean;

  constructor(private serviceService: ServiceService,
              private userService: UserService) {}

  getUserReviews(uid: string) {
    return firebase.database().ref('reviews/'+uid);
  }

  modify_user_rating(userUID: string ) {
    let keys = [];
    this.serviceService.getServices(userUID).on('value', snap => {
      console.log(snap.val());
      for (let key in snap.val()) {
        keys.push(...snap.val()[key].filter(service => service.status === 'my_service'));
      }
      console.log(keys);
      let nr = 0, sum = 0;
      this.getReviews().on('value', snap => {
        snap.val().forEach(review => {
          if (keys.includes(review.idService)) {
            sum += review.rating;
            nr++;
          }
        });
        this.userService.getUsers().on('value', snap2 => {
          snap2.val().forEach( user => {
            if( user.uid === userUID) user.rating = sum/nr;
          });
          this.userService.updateDB(snap2.val());
        });
      });
    })
  }

  updateDB(data){
    return firebase.database().ref('reviews').set(data);
  }

  getReviews(...args) {
    if(args) return firebase.database().ref('reviews/'+args);
    return firebase.database().ref('reviews');
  }
}
