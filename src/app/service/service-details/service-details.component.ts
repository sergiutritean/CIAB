import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ServiceModel } from 'src/app/shared/service.model';
import { toast } from 'angular2-materialize';
import { ServiceService } from 'src/app/shared/services/service.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'firebase';
import { UserModel } from 'src/app/shared/user.model';

declare let paypal: any;

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit,AfterViewInit {
  @Input() service: ServiceModel;

  amount: number = 0;
  label: string = '';
  isOpen: boolean = false;
  isOkay: boolean = false;

  constructor(private userService: UserService, private serviceService: ServiceService) {

  }

  author: UserModel;

  ngOnInit() {
    console.log(this.service);
    this.amount = this.service.price;
    this.label = this.service.title;

    this.userService.getUsers().on('value', snap => {
      this.author = snap.val().filter( user => user.uid === this.service.fromUser)[0];
    })
  }

  isAuth() {
    return this.userService.isAuthenticated();
  }

  doAfterPayment() {
    this.serviceService.whenBuyService(this.service);
  }

  ngAfterViewInit(): void {
    console.log(this.amount);
    this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(() => {
      paypal.Button.render({
        env: 'sandbox',
        client: {
          production: '',
          sandbox: 'Ae_nW2sZxXiUHhvEVgmpKJDH6PLk7QdVmRHszElpCPqghzJVDdYqi8B0em3jx7LFHPv2wHBlPQKj1wXN'
        },
        commit: true,
        style: {
          size: 'responsive',
          color: 'black',
          shape: 'rect',
          layout: 'vertical'
        },
        payment: function (data, actions) {
          return actions.payment.create({
            payment: {
              transactions: [
                {
                  amount: { total: 1 , currency: 'EUR' }
                }
              ]
            }
          })
        },
        onAuthorize: (data, actions) => {
          return actions.payment.execute().then( (payment) => {
            let serviceToAdd = this.service;
            serviceToAdd.status = 'waiting';
            this.serviceService.whenBuyService(serviceToAdd);
            toast('Service bought succesfully!', 2000);
          })
        }
      }, '#paypal-button');
    });
    console.log(this.isOkay);
  }

  private loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);

    })
  }

}
