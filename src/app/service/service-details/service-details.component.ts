import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ServiceModel } from 'src/app/shared/service.model';

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

  constructor() {

  }

  ngOnInit() {
    console.log(this.service);
    this.amount = this.service.price;
    this.label = this.service.title;
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
        onAuthorize: function(data, actions) {
          return actions.payment.execute().then(function(payment) {
            // TODO
          })
        }
      }, '#paypal-button');
  });
  }

  private loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement)
    })
  }

}
