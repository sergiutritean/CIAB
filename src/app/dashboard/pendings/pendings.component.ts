import {Component, Input, OnInit} from '@angular/core';
import {PendingModel} from "../../shared/pending.model";

@Component({
  selector: 'app-pendings',
  templateUrl: './pendings.component.html',
  styleUrls: ['./pendings.component.css']
})
export class PendingsComponent implements OnInit {

  @Input() status:string;
  @Input() pendings: PendingModel[];

  constructor() { }

  ngOnInit() {
    console.log(status);
    console.log(this.pendings);
  }

}
