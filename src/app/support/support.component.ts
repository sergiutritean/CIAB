import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {toast} from "angular2-materialize";
import {User} from "firebase";
import {UserService} from "../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    nemultumiri: new FormControl(''),
    sugestii: new FormControl('')
  });

  constructor(private userService: UserService,
              private router: Router) {

  }
  ngOnInit() {
  }

  onSubmit() {
    this.userService.getFeedbacks().once( 'value', snap =>{
      let feedbacks = snap.val();
      if(!feedbacks) feedbacks = [];
      feedbacks.push({
        'title':this.form.value.title,
        'nemultumiri':this.form.value.nemultumiri,
        'sugestii':this.form.value.sugestii
      });
      this.userService.getFeedbacks().set(feedbacks).then( () =>{
        this.form.reset();
        this.router.navigate(['/']);
      });
      toast('Multumim pentru feedback!',1000);
    })
  }

}
