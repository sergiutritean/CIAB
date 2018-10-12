import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor() {}

  getUserReviews(uid: string) {
    return firebase.database().ref('reviews/'+uid);
  }
}
