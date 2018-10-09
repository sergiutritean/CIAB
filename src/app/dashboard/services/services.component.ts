import { Component, Input, OnInit } from '@angular/core';
import { ServiceModel } from 'src/app/shared/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input() services: ServiceModel[];

  constructor() { }

  ngOnInit() {
    this.services = [
      new ServiceModel(
        true,
        "Titlululululululu",
        "Descrierererererere",
        3,
        "Categorie",
        [],
        "bSUKBJOsf5NnZvuv5v6maicWeON2",
        "cine stie",
        true,
        "In Progress",
        69.99
      ),
      new ServiceModel(
        true,
        "Titlululululululu2",
        "Descrierererererere2",
        5,
        "Alta Categorie",
        [],
        "bSUKBJOsf5NnZvuv5v6maicWeON2",
        "cine stie",
        false,
        "Complete",
        99.99
      )
    ];
  }

}
