import { Component, OnInit } from '@angular/core';
import {} from 'angular-star-rating';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyDJ4HdgirCzrCx67C-D6wIBQD9vtz4ES_0',
      authDomain: 'caught-in-a-box.firebaseapp.com',
      databaseURL: 'https://caught-in-a-box.firebaseio.com',
      projectId: 'caught-in-a-box',
      storageBucket: 'caught-in-a-box.appspot.com',
      messagingSenderId: '739449080424'
    };
    firebase.initializeApp(config);
  }


  onRatingChange(event){
    console.log(event);
  }
}
