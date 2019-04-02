import { Component, OnInit } from '@angular/core';
import { Service } from '../../shared/service.model';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {
  services: Service[] = [
    new Service(
      true,
      "Service1",
      "Description1",
      4,
      "Cat1",
      [ "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png" ],
      "p1Q9lwIYJEOB20wWg2oGd6IZYaj2",
      "0"
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
