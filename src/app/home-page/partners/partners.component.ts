import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partners: {name:string,website:string,photoURL:string}[] = [];
  decoy: {name:string,website:string,photoURL:string}[] = [];
  numbers: any[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPartners().on('value', snap => {
      this.userService.partnersData = snap.val();
      for(let key in this.userService.partnersData){
        console.log(key, this.userService.partnersData[key]);
        let photoURL = key+'/logo.png';
        this.userService.refToStorage(photoURL).getDownloadURL().then(val => {
          photoURL = val;
          let website = this.userService.partnersData[key].url;
          let name = this.userService.partnersData[key].name;
          let toAdd = {
            name: name,
            website:website,
            photoURL:photoURL,
          };
          console.log(toAdd);
          this.decoy.push(toAdd);
        }).then( () => {
          this.partners = this.decoy;
          this.numbers = Array((this.decoy.length+1)/2).fill(0).map((x,i)=>2*i); // [0,1,2,3,4]
          console.log(this.partners, this.numbers);
        });
      }

    });
  }

}
