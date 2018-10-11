import { Component, OnInit } from '@angular/core';
import { ServiceModel } from '../shared/service.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  service: ServiceModel = new ServiceModel(
    true,
    "Titlululululululu",
    "Descrierererererere",
    3,
    "Categorie",
    [
      "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
      "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
    ],
    "bSUKBJOsf5NnZvuv5v6maicWeON2",
    "cine stie",
    true,
    "In Progress",
    69.99
  );

  constructor() { }

  ngOnInit() {
  }

}
