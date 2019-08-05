import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-feedbacks-admin',
  templateUrl: './feedbacks-admin.component.html',
  styleUrls: ['./feedbacks-admin.component.css']
})
export class FeedbacksAdminComponent implements OnInit {

  password: any;
  feedbacks: any[];

  form = new FormGroup({
    pass: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService) {
    this.password = 'ciab1234';
  }

  ngOnInit() {
    this.userService.getFeedbacks().on('value', snap => {
      this.feedbacks = snap.val();
    });
  }

  isLoggedIn() {
    return this.form.value.pass == this.password;
  }
}
