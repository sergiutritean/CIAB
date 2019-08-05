import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { ServiceService } from 'src/app/shared/services/service.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ReviewService } from 'src/app/shared/services/review.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

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
  uid: string;
  partnerImage: any;
  partnerImageURL: string;

  constructor(private serviceService: ServiceService,
              private userService: UserService,
              private reviewService: ReviewService,
              private route: ActivatedRoute,
              private router: Router) {
    this.hasUser = false;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.uid = params['uid'];
    });
    if(this.uid == undefined)
      this.uid = this.userService.uid;
    if(!this.userService.uid)
      this.router.navigate(['/login']);
    console.log(this.uid);
    // this.reviewService.getUserReviews(this.userService.uid).on('value', snap => {
    this.reviewService.getUserReviews(this.uid).on('value', snap => {
      this.reviews = snap.val();
      this.userService.getUsers().once('value', snap => {
        console.log(snap.val());
        // this.user = snap.val().filter( user => user.uid === this.userService.uid)[0];
        this.user = snap.val().filter( user => user.uid === this.uid)[0];
        this.userService.getPartners().once('value', snap => {
          if(this.user.isPartner){
            this.partnerImage = snap.val()[this.user.isPartner];
            let photoURL = this.user.isPartner + '/logo.png';
            this.userService.refToStorage(photoURL).getDownloadURL().then(val => {
              this.partnerImageURL = val;
            });
          }
          this.hasUser = true;
          console.log(this.user);
          // this.serviceService.getServices(this.userService.uid).on('value', snap => {
          this.serviceService.getServices(this.uid).on('value', snap => {
            this.services = snap.val();
          });
        });
      })
    })
  }

}
