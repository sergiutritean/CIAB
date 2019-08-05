import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-payment-service',
  templateUrl: './payment-service.component.html',
  styleUrls: ['./payment-service.component.scss']
})
export class PaymentServiceComponent implements OnInit, AfterViewInit {

  @Input() amount: number;
  @Input() label: string;

  @ViewChild('payElement') payElement;

  elements: any;
  paymentRequest: any;
  prButton: any;

  constructor(private pmt: PaymentService) { }

  ngOnInit() {
  }
  // Fa sa ruleze doAfterPayment()

  ngAfterViewInit() {

    this.paymentRequest = this.pmt.stripe.paymentRequest({
      country: 'RO',
      currency: 'eur',
      total: {
        amount: this.amount,
        label: this.label
      }
    });

    this.elements = this.pmt.stripe.elements();

    this.paymentRequest.on('source', async (event) => {
      console.log(event);

      setTimeout( () => {
        event.complete('success');
      }, 1000);
    });

    this.prButton = this.elements.create('paymentRequestButton', {
      paymentRequest: this.paymentRequest,
      style: {
        paymentRequestButton: {
          type: 'buy',
          theme: 'dark'
        }
      }
    });

    this.mountButton();
  }

  async mountButton() {
    const result = await this.paymentRequest.canMakePayment();

    if(result) {
      this.prButton.mount(this.payElement.nativeElement);
    } else {
      console.log('ceva cu browseru');
    }
  }
}
