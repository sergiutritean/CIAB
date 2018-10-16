import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from 'src/app/shared/services/user.service';
import { ServiceService } from 'src/app/shared/services/service.service';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  categories = [];
  services = [];
  dataToAdd = [];

  constructor(private userService: UserService,
              private serviceService: ServiceService) { }

  ngOnInit() {
    this.userService.getCategories().on( 'value', snap => {
      this.categories = snap.val();
      console.log(this.categories);
    });
    this.serviceService.getServices().on('value', snap => {
      this.services = snap.val();
    });
    let textToAdd = {};
    for(let key in this.services){
      for(let key2 in this.services[key]){
        for(let service of this.services[key][key2]){
          console.log(service);
          textToAdd[service.title] = service.imagePath[0];
          console.log(service.imagePath);
        }
      }
    }
    this.dataToAdd.push({'data': textToAdd});
  }

}
