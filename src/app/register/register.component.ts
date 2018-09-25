import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { UserModel } from 'src/app/shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any;
  imageURL: any;
  image: any;
  userIndex: any;
  error: any;
  currUser: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      account_type: new FormControl(''),
      phone: new FormControl(''),
      location: new FormControl(''),
      rating: new FormControl(''),
      desc: new FormControl(''),
      username: new FormControl(''),
      barter: new FormControl(''),
      password1: new FormControl(''),
      password2: new FormControl('')
    });
  }

  onRegUser() {
    this.error = null;
    let user = new UserModel(
      this.form.value.name,
      '',
      this.form.value.email,
      this.form.value.account_type,
      this.form.value.phone,
      this.form.value.location,
      this.form.value.rating,
      this.form.value.desc,
      this.form.value.username,
      this.form.value.barter,
    );
    console.log(user);
  }
}
