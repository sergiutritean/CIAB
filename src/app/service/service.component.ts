import { Component, OnInit } from '@angular/core';
import { ServiceModel } from '../shared/service.model';
import { ServiceService } from 'src/app/shared/services/service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  id: string;
  service: ServiceModel;

  constructor(private serviceService: ServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.serviceService.getServices().on('value', snap => {
        console.log(snap.val());
        for(let key in snap.val()) if(snap.val()[key][this.id] && snap.val()[key][this.id][0].status === 'my_service'){
          this.service = snap.val()[key][this.id][0];
          console.log(this.service);
          break;
        }
      })
    });
  }

}
