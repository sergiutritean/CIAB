import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string;

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

  updateDB(url, data) {
    firebase.database().ref(url).set(data);
  }

  logout() {
    this.token = null;
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

}
