import { Component, OnInit, Input } from '@angular/core';
import { ReviewModel } from 'src/app/shared/review.model';
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() review: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.review);
    console.log(this.review.imageFromUser);
    console.log(this.review.partner);
    console.log(this.review.partnerImage);

    let photoURL = this.review.partnerUID + '/logo.png';
    this.userService.refToStorage(photoURL).getDownloadURL().then(val => {
      this.review.partnerImage = val;
      console.log(val);
    });

  }

}
