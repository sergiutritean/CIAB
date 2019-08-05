import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../shared/services/user.service";
import {ReviewService} from "../shared/services/review.service";
import {ServiceService} from "../shared/services/service.service";

@Component({
  selector: 'app-reviews-admin',
  templateUrl: './reviews-admin.component.html',
  styleUrls: ['./reviews-admin.component.css']
})
export class ReviewsAdminComponent implements OnInit {

  password: any;
  reviews: any[];

  form = new FormGroup({
    pass: new FormControl('', Validators.required)
  });

  constructor(private reviewService: ReviewService,
              private userService: UserService,
              private serviceService: ServiceService) {

    this.password = 'ciab1234';
  }

  ngOnInit() {
    this.reviewService.getReviews().on('value', snap => {
      this.reviews = snap.val();
      this.reviews.filter( review => review.afterPurchase == true);
      this.reviews.forEach( review => {
        let name1 = '';
        let name2 = '';

        ///get name of users
        this.userService.getUsers().once('value', snap => {
          let users = snap.val();
          users.filter( user => { return user.uid == review.fromUser || user.uid == review.toUser;});
          if(users[0].uid == review.toUser){
            let aux = users[0]; users[0] = users[1]; users[1] = aux;
          }
          review.fromUser = users[0].name;
          review.toUser = users[1].name;

          ///get name of service
          this.serviceService.getServices().once('value', snap => {
            let services = snap.val();
            for(let key in services) if(services[key][review.idService])
              review.idService = services[review.idService].title;
            console.log(review);
          });
        });

      });
    });
  }

  isLoggedIn() {
    return this.form.value.pass == this.password;
  }

}
