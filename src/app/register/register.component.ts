import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { UserModel } from 'src/app/shared/user.model';
import { Router } from '@angular/router';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.image = null;
    this.imageURL = null;
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
    if (this.form.value.password1 !== this.form.value.password2) {
      this.error = 'Passwords don\'t match!';
      return;
    }
    const email = this.form.value.email;
    const password = this.form.value.password1;
    this.userService.registerUser(email, password).then(resp => { // Register user in Firebase Auth
      this.currUser.uid = resp.user.uid;
      this.userService.uid = resp.user.uid;
      console.log(1);
      this.userService.getUsers().once('value', snap => { // Get users
        let array = snap.val();
        if ( array === null) {
          array = [];
        }
        const path = this.currUser.uid + '/profile';
        this.userService.addImage(path, this.image).on('state_changed',
          snapshot => { console.log(snapshot)},
          error => { console.log(error); },
          () => {
            console.log(3);
            this.userService.getImage(path).getDownloadURL().then( (resp) => {
              this.currUser.imageURL = resp;
              array.push(this.currUser);
              this.userService.updateDB(array).then(() => {
                console.log(3);
                toast('User added succesfully!', 1000);
                this.router.navigate(['dashboard']);
              }).catch(error => console.log(error)); // Add user to database
            });
          });
      });
    }).catch(error => this.error = error);
    console.log(this.currUser);
  }

  isNull() { // Checks if no image uploaded
    return this.imageURL == null;
  }

  onFileChanged(event) { // Gets profile image
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.imageURL = (<FileReader>event.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
      this.image = event.target.files[0];
    }
  }
}
