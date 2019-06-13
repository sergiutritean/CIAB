import { Component, Input, OnInit } from '@angular/core';
import { ReviewModel } from 'src/app/shared/review.model';
import { UserService } from 'src/app/shared/services/user.service';
import { ServiceService } from 'src/app/shared/services/service.service';
import {ReviewService} from "../../shared/services/review.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: ReviewModel[];
  @Input() uid: string;
/*  reviews: ReviewModel[] = [
    new ReviewModel(
      4,
      [
        "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
        "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
        "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
      ],
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      "UserInFlacari",
      "sdf"
    )
  ];*/
  constructor(private serviceService: ServiceService,
              private userService: UserService,
              private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviews().once('value', snap => {
      this.reviews = snap.val().filter( review => review.idService === this.uid);
      console.log(this.reviews);
      this.reviews.forEach( review => {
        this.userService.getUsers().once('value', snap2 => {
          review.fromUser = snap2.val().filter(user => user.uid === review.fromUser)[0].username;
          console.log(review);
        });
      });
    });

  }

}
