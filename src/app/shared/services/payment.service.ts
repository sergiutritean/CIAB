declare let Stripe: any;

import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {

  stripe = Stripe('');

  constructor() { }

}
