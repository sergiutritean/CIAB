import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {ServiceService} from "./service.service";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private serviceService: ServiceService,
              private userService: UserService) {}

  getUserReviews(uid: string) {
    return firebase.database().ref('reviews/'+uid);
  }

  modify_user_rating(userUID: string ) {
    let keys: any[] = this.serviceService.get_all_service_keys(userUID);
    let goodRating = 0, nr = 0, sum = 0;
    this.getReviews().on('value', snap => {
      snap.val().forEach(review => {
        if (keys.includes(review.idService)) {
          sum += review.rating;
          nr++;
        }
      });
      this.userService.getUsers().on('value', snap2 => {
        snap2.val()[userUID].rating = sum / nr;
        this.userService.updateDB(snap2.val());
      });
    });
  }

  updateDB(data){
    return firebase.database().ref('reviews').set(data);
  }

  getReviews(...args) {
    if(args) return firebase.database().ref('reviews/'+args);
    return firebase.database().ref('reviews');
  }
}
