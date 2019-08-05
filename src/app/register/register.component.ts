import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { UserModel } from 'src/app/shared/user.model';
import { Router } from '@angular/router';
import { toast } from 'angular2-materialize';
import {HttpEventType} from "@angular/common/http";

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
  categories: any;
  formUploadDone: boolean;

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    account_type: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    categories: new FormControl(''),
    location: new FormControl(''),
    desc: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    barter: new FormControl(''),
    password1: new FormControl('',Validators.required),
    password2: new FormControl('',Validators.required),
    partner: new FormControl('')
  });

  required = ['name', 'email', 'account_type', 'phone', 'desc', 'username', 'password1', 'password2'];

  constructor(private userService: UserService,
              private router: Router) {
    this.userService.getCategories().on('value', snap => {
      this.categories = snap.val();
      console.log(this.categories);
    });
    this.formUploadDone = true;
  }

  ngOnInit() {
    this.image = null;
    this.imageURL = null;
  }

  onRegUser() {
    this.formUploadDone = false;
    console.log(this.form.value.categories);
    this.error = null;
    for(let key of this.required) if(!this.form.value[key]){
      console.log(key);
      return;
    }

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
      '',
      this.form.value.categories,
      '',
      []
    );
    if (this.form.value.password1 !== this.form.value.password2) {
      this.error = 'Passwords don\'t match!';
      this.formUploadDone = true;
      return;
    }

    if(!this.wrongPartnerKey())
      this.currUser.isPartner = this.form.value.partner;
    else {
      if(this.form.value.partner) return;
      this.currUser.isPartner = null;
    }

    const email = this.form.value.email;
    const password = this.form.value.password1;

    let users = [];
    this.userService.getUsers().once('value', snap => { // Get users
      let users = snap.val();
      if (users === null) {
        users = [];
      }
      users.forEach(user => {
        if (user.username === this.form.value.username) {
          this.error = 'Username-ul a fost deja luat!';
        }
      });
      if(this.error) return;
      this.userService.registerUser(email, password).then(resp => { // Register user in Firebase Auth
        this.currUser.uid = resp.user.uid;
        this.userService.uid = resp.user.uid;

        const path = this.currUser.uid + '/profile';
        this.userService.addImage(path, this.image).on('state_changed',
          snapshot => { console.log(snapshot)},
          error => { console.log(error); this.formUploadDone = true;},
          () => {
            this.userService.getImage(path).getDownloadURL().then( (resp) => {
              this.currUser.imageURL = resp;
              users.push(this.currUser);
              this.userService.updateDB(users).then(() => {
                console.log(3);
              }).catch(error => {
                console.log(error);
                this.formUploadDone = true;
                this.userService.deleteUser()
              }); // Add user to database
            });
          });
      }).catch(error => {
        console.log(error);
        this.formUploadDone = true;
        this.userService.deleteUser()
      }).then( () => {
        toast('User added succesfully!', 1000);
        this.router.navigate(['dashboard']);
      });
      console.log(this.currUser);
    });
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

  wrongPartnerKey() {
    this.userService.getPartners().on('value', snap => {
      this.userService.partnersData = snap.val();
      if(this.form.value.partner && this.form.value.partner.length == 7){
        return !(this.form.value.partner in this.userService.partnersData);
      }
      return false;
    })
  }
}
