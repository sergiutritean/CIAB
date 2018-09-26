import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { UserModel } from 'src/app/shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  imageURL: any;
  image: any;
  userIndex: any;
  error: any;
  currUser: any;

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    account_type: new FormControl(''),
    phone: new FormControl(''),
    location: new FormControl(''),
    desc: new FormControl(''),
    username: new FormControl(''),
    barter: new FormControl(''),
    password1: new FormControl(''),
    password2: new FormControl('')
  });

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  onRegUser() {
    this.error = null;
    this.currUser = new UserModel(
      this.form.value.name,
      '',
      this.form.value.email,
      this.form.value.account_type,
      this.form.value.phone,
      this.form.value.location,
      0,
      this.form.value.desc,
      this.form.value.username,
      this.form.value.barter,
      ''
    );
    if (this.form.value.password1 !== this.form.value.password2){
      this.error = 'Passwords don\'t match!';
      return;
    }
    const email = this.form.value.email;
    const password = this.form.value.password1;
    this.userService.registerUser(email, password).then(resp => { // Register user in Firebase Auth
      this.currUser.uid = resp.user.uid;
      this.userService.getUsers().on('value', snap => { // Get users
        let array = snap.val();
        if ( array === null) {
          array = [];
        }
        array.push(this.currUser);
        //this.userService.updateDB('users', array); // Add user to database
      });
    }).catch(error => this.error = error);
    console.log(this.currUser);
  }

  isNull() { // Checks if no image uploaded
    return this.imageURL !== null;
  }

  onFileChanged(event) { // Gets profile image
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event2: ProgressEvent) => {
        this.imageURL = (<FileReader>event2.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
      this.image = event.target.files[0];
    }
  }
}
