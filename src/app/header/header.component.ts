import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  isAuth() {
    console.log(this.userService.token!=null);
    return (this.userService.token!=null);
  }

  logout() {
    this.userService.logout();
  }

}
