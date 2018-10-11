import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: UserModel = new UserModel(
    "Vasilica",
    "da",
    "test@test.com",
    "POWERUSER",
    "+40765432123",
    "aici",
    4,
    "Vasilica, asta-s eu!",
    "vasilica.basilica69",
    true,
    "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
  )

  constructor() { }

  ngOnInit() {
  }

}
