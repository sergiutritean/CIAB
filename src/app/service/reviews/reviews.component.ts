import { Component, OnInit } from '@angular/core';
import { ReviewModel } from 'src/app/shared/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: ReviewModel[] = [
    new ReviewModel(
      4,
      [
        "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
        "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
        "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
      ],
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      "UserInFlacari",
      {
        isUser: false,
        id: "0"
      }
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
