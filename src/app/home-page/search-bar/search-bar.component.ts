import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from 'src/app/shared/services/user.service';
import { ServiceService } from 'src/app/shared/services/service.service';
import { text } from '@angular/core/src/render3/instructions';
import { ServiceModel } from 'src/app/shared/service.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  categories = [];
  servicesBrute = [];
  services = [];
  dataToAdd = [];
  serviceSearched: any;
  suggestions: any[];
  ok: boolean = false;

  constructor(private userService: UserService,
              private serviceService: ServiceService) { }

  ngOnInit() {
    this.userService.getCategories().on( 'value', snap => {
      this.categories = snap.val();
      console.log(this.categories);
    });
    this.serviceService.getServices().on('value', snap => {
      this.servicesBrute = snap.val();
      for(let key in this.servicesBrute) for(let key2 in this.servicesBrute[key])
        for(let service of this.servicesBrute[key][key2])
          this.services.push(service);
      this.ok = true;
    });

  }

  filterServices(event) {
    this.suggestions = this.services.filter( service => {
      const s1 = service.title.toLowerCase();
      const s2 = event.query.toLowerCase();
      return s1.search(s2) === 0;
    });
  }

}
