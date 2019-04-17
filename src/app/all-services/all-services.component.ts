import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ServiceService } from 'src/app/shared/services/service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {

  services = [];
  servicesToShow = [];
  hasCategory: boolean = false;
  category: string = '';

  constructor(private userService: UserService,
              private serviceService: ServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.serviceService.getServices().on('value',snap => {
      for(let key in snap.val()) for(let key2 in snap.val()[key])
        this.services.push(...snap.val()[key][key2]);

      this.services = this.services.filter( service => (service.fromUser !== this.userService.uid && service.status ==='my_service') );
      this.servicesToShow = this.services.slice();
      this.activatedRoute.params.subscribe( (params: Params) => {
        if(params['category']){
          this.hasCategory = true;
          this.category = params['category'];
          this.filter({
            'category': this.category
          });
        }
      });
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
    const category = event.category;

    //title
    if(title) {
      this.servicesToShow = this.servicesToShow.filter( service => {
        const s1 = service.title.toLowerCase();
        const s2 = title.toLowerCase();
        return s1.search(s2) === 0;
      });
    }

    //service_type
    if(service_type && service_type.offer ^ service_type.request) {
      this.servicesToShow = this.servicesToShow.filter( service => {
        return service.isOffer === (service_type.offer===true? 'offer':'request');
      });
    }

    //all_categories
    if(!all_categories && category){
      this.servicesToShow = this.servicesToShow.filter( service => {
        return service.category === category;
      });
    }
    /* TODO: To add categories*/

    //price
    if(price && price.max) {
      this.servicesToShow = this.servicesToShow.filter( service => {
        return service.price <= price.max;
      });
    }
    if(price && price.min) {
      this.servicesToShow = this.servicesToShow.filter( service => {
        return service.price >= price.min;
      });
    }

    //barter
    if(barter){
      this.servicesToShow = this.servicesToShow.filter( service => {
        return service.barter === barter;
      });
    }
    console.log(this.servicesToShow);
  }

}
