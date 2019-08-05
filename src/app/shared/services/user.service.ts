import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {ServiceService} from "./service.service";
import {async} from "rxjs-compat/scheduler/async";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string;
  uid: string;
  partnersData: any;
  actions: any;

  constructor(private router: Router) {

  }

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

  async convertUIDtoName(uid: string) {
    let name = '';
    this.getUsers().once('value', snap => {
      let users = snap.val();
      console.log(users);
      console.log(uid);
      name = users.filter(user => user.uid === uid)[0].name;
    });
    console.log(name);
    return name;
  }

  getPartners(){
    return firebase.database().ref('partners');
  }

  refToStorage(args:string){
    return firebase.storage().ref(args);
  }

  deleteUser(){
    return firebase.auth().currentUser.delete();
  }

  getFeedbacks(){
    return firebase.database().ref('feedbacks');
  }

  getPendings() {
    return firebase.database().ref('pendings');
  }

  getTransService() {
    return firebase.database().ref('trans_service');
  }

  getNotify(arg: string) {
    if(arg) return firebase.database().ref('notify/'+arg);
    return firebase.database().ref('notify');
  }
}
