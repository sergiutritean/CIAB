import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {

  services = [];
  servicesToShow = [];

  constructor(private userService: UserService,
              private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.getServices().on('value',snap => {
      for(let key in snap.val()) for(let key2 in snap.val()[key])
        this.services.push(...snap.val()[key][key2]);

      this.services = this.services.filter( service => service.fromUser !== this.userService.uid);
      this.servicesToShow = this.services.slice();
      console.log(this.services);
    });
  }

  filter(event) {
    console.log(event);
    this.servicesToShow = [...this.services];
    console.log(this.servicesToShow, this.services);
    const title = event.title;
    const service_type = event.service_type;
    const all_categories = event.all;
    const price = event.price;
    const barter = event.barter;

    //title
    if(title) {
      console.log('title');
      this.servicesToShow = this.servicesToShow.filter( service => {
        const s1 = service.title.toLowerCase();
        const s2 = title.toLowerCase();
        return s1.search(s2) === 0;
      });
    }

    //service_type
    if(service_type.offer ^ service_type.request) {
      this.servicesToShow = this.servicesToShow.filter( service => {
        return service.isOffer === (service_type.offer===true? 'offer':'request');
      });
    }

    //all_categories
    /* TODO: To add categories*/

    //price
    if(price.max) {
      console.log("MAX"+price.max);
      this.servicesToShow = this.servicesToShow.filter( service => {
        return service.price <= price.max;
      });
    }
    if(price.min) {
      console.log("MIN"+price.min);
      this.servicesToShow = this.servicesToShow.filter( service => {
        return service.price >= price.min;
      });
    }

    //barter
    if(barter){
      console.log('barter');
      this.servicesToShow = this.servicesToShow.filter( service => {
        return service.barter === barter;
      });
    }
    console.log(this.servicesToShow);
  }

}
