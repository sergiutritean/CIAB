import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { ServiceService } from 'src/app/shared/services/service.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: UserModel;
  hasUser: boolean;
  reviews = [];
  services = [];

  constructor(private serviceService: ServiceService,
              private userService: UserService,
              private reviewService: ReviewService) {
    this.hasUser = false;
  }

  ngOnInit() {
    this.reviewService.getUserReviews(this.userService.uid).on('value', snap => {
      this.reviews = snap.val();
      this.userService.getUsers().on('value', snap => {
        console.log(snap.val());
        this.user = snap.val().filter( user => user.uid === this.userService.uid)[0];
        this.hasUser = true;
        console.log(this.user);
        this.serviceService.getServices(this.userService.uid).on('value', snap => {
          this.services = snap.val();
        });
      })
    })
  }

}
