import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {ServiceService} from "./service.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string;
  uid: string;

  constructor(private router: Router) { }

  registerUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  getUsers() {
    return firebase.database().ref('users');
  }

  updateDB(data) {
    return firebase.database().ref('users').set(data);
  }

  addImage(url, image) {
    return firebase.storage().ref(url).put(image);
  }

  logout() {
    this.token = null;
    firebase.auth().signOut();
    this.uid = null;
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return this.token != null;
  }

  getImage(url) {
    return firebase.storage().ref(url);
  }

  getCategories() {
    return firebase.database().ref('categories');
  }

  convertUIDtoName(uid: string) {
    let name = '';
    this.getUsers().once('value', snap => {
      name = snap.val().filter(user => user.uid === uid)[0].name;
    });
    return name;
  }

}
