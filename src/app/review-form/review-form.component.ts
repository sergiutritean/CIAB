import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/services/service.service';
import { ServiceModel } from 'src/app/shared/service.model';
import { UserService } from 'src/app/shared/services/user.service';
import { ReviewModel } from 'src/app/shared/review.model';
import { toast } from 'angular2-materialize';
import {ReviewService} from "../shared/services/review.service";

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required)
  });

  images: Array<any>;
  imagesURL: Array<any>;
  serviceUID: string;
  service: ServiceModel;
  error: string;
  reviewToAdd: any;
  reviewUID: string;
  constructor(private route:  ActivatedRoute,
              private serviceService: ServiceService,
              private userService: UserService,
              private reviewService: ReviewService,
              private router: Router) { }

  ngOnInit() {
    this.images = [];
    this.imagesURL = [];
    this.route.params.forEach((params: Params) => {
      this.serviceUID = params['uid'];
    });
    this.serviceService.getServices().once('value', snap => {
      let users = snap.val();
      console.log(users);
      for( let key in users){
        console.log(users[key]);
        if(users[key][this.serviceUID]){
          // TODO: left
          console.log(users[key][this.serviceUID]);
          console.log(this.serviceUID);
          if(users[key][this.serviceUID].filter( service => service.status==='my_service')[0])
            this.service = users[key][this.serviceUID].filter( service => service.status==='my_service')[0];
          console.log(this.service);
        }
      }
      console.log(this.service);
    })
  }

  notAuth(){
    //return !this.userService.isAuthenticated();
  }

  onSubmit(){
    this.error='';
    console.log(this.form.value);
    if(!this.form.valid) return;
    if(!this.form.value.rating){
      this.error = 'Te rugăm să dai o notă serviciului!';
      return;
    }
    this.reviewUID = this.serviceService.getUniqueID();
    this.addImages(0);
  }

  onChange(event: any) {
    const files = [].slice.call(event.target.files);
    const indMax = files.length-1;
    for ( let i = 0;i<=indMax;++i) {
      if (event.target.files && files[i]) {
        const reader = new FileReader();
        reader.onload = (events: ProgressEvent) => {
          this.imagesURL.push((<FileReader>events.target).result);
        };
        console.log(files[i]);
        reader.readAsDataURL(files[i]);
        this.images.push(files[i]);
      }
    }
  }

  addImages(index: number) {
    return new Promise((resolve) => {
      if(!index) this.imagesURL = [];
      let date = new Date();
      let timestamp  = date.getTime();
      if(index === this.images.length) {
        this.reviewToAdd = new ReviewModel(
          this.form.value.title,
          this.form.value.desc,
          this.form.value.rating,
          this.imagesURL,
          this.userService.uid,
          this.serviceUID,
          this.reviewUID,
          timestamp,
          this.reviewService.afterPurchase
        );
        this.reviewService.afterPurchase = false;
        console.log(this.reviewToAdd);
        this.reviewService.getReviews().once('value', snap => {
          let allReviews = snap.val();
          console.log(allReviews);
          if(!allReviews) allReviews = [];
          console.log(this.reviewToAdd);
          allReviews.push(this.reviewToAdd);
          let newRating = 0;
          console.log(allReviews);
          allReviews.forEach( review => newRating += review.rating);
          newRating /= allReviews.length;

          this.reviewService.updateDB(allReviews).then( () => {
            toast('Review sent succsesfull!',1500);
            let users = '';
            this.serviceService.getServices().once('value', snap => {
              users = snap.val();
              console.log(users);
              let uidBuyer = this.userService.uid;
              console.log(this.service);
              let uidSeller = this.service.fromUser;
              if(!this.service.isOffer){
                let aux = uidBuyer;
                uidBuyer = uidSeller;
                uidSeller = aux;
              }

              let ind2 = users[uidSeller][this.service.uid].findIndex(service => service.status === 'my_service');
              console.log(ind2);
              users[uidSeller][this.service.uid][ind2].rating = newRating;

              this.reviewService.modify_user_rating(this.service.fromUser);

            }).then( () => {
              this.serviceService.getServices().set(users);
              /*Failed payment after review*/
              /*            if(this.reviewToAdd.rating >= 3 && this.userService.actions) {
                            this.userService.actions.execute();
                          }*/
            });
            this.router.navigate(['dashboard']);
          });
        })
      }
      const url = 'reviews/' + this.reviewUID + '/' + index;
      const uploadTask = this.serviceService.addImage(url, this.images[index]);
      uploadTask.on('state_changed', snapshot => {}, error => {console.log(error)}, ()=>{
        this.userService.getImage(url).getDownloadURL().then( (resp) => {
          this.imagesURL.push(resp);
          console.log(this.imagesURL);
          console.log('Done image ' + index);
          this.addImages(index+1);
        });
      });
      return resolve(null);
    });

  }

}
