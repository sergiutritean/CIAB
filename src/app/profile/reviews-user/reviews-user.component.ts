import {Component, Input, OnInit} from '@angular/core';
import {ReviewModel} from "../../shared/review.model";
import {ServiceService} from "../../shared/services/service.service";
import {UserService} from "../../shared/services/user.service";
import {ReviewService} from "../../shared/services/review.service";

@Component({
  selector: 'app-reviews-user',
  templateUrl: './reviews-user.component.html',
  styleUrls: ['./reviews-user.component.css']
})
export class ReviewsUserComponent implements OnInit {

  @Input() userUID: any;
  reviews: ReviewModel[];
  constructor(private serviceService:ServiceService,
              private userService: UserService,
              private reviewService: ReviewService) { }

  ngOnInit() {
    let serviceUID = [];
    this.serviceService.getServices(this.userUID).once('value', snap => {
      for(let uid in snap.val()) serviceUID.push(uid);
      console.log(serviceUID,this.userUID);
      serviceUID = serviceUID.filter( uid => snap.val()[uid][0].fromUser === this.userUID);
      console.log(serviceUID,this.userUID);
      this.reviewService.getReviews().on('value', snap => {
        this.reviews = snap.val().filter( review =>{
          console.log(review.idService);
          if(serviceUID.includes(review.idService)) {
            review.fromUser = this.userService.convertUIDtoName(review.fromUser);
            return true;
          }
          return false;
        });
        console.log(this.reviews);
      });
    });

  }

}
