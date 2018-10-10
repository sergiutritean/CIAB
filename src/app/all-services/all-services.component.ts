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

  constructor(private userService: UserService,
              private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.getServices().on('value',snap => {
      for(let key in snap.val()) for(let key2 in snap.val()[key])
        this.services.push(...snap.val()[key][key2]);

      this.services = this.services.filter( service => service.fromUser !== this.userService.uid);

      console.log(this.services);
    });
  }

}
