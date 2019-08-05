import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

//import * as $ from 'jquery';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  isAuth() {
    return (this.userService.token != null);
  }

  logout() {
    this.userService.logout();
  }

}
