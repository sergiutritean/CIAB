import {AfterViewInit, Component, EventEmitter, Input, OnInit} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {ServiceService} from "../../../shared/services/service.service";
import {MaterializeAction, toast} from "angular2-materialize";
import {Router} from "@angular/router";
import {NotifyModel} from "../../../shared/notify.model";
import {ReviewService} from "../../../shared/services/review.service";
import {PendingModel} from "../../../shared/pending.model";
import {TransServiceModel} from "../../../shared/transService.model";

declare let paypal: any;

@Component({
  selector: 'app-show-pending',
  templateUrl: './show-pending.component.html',
  styleUrls: ['./show-pending.component.css']
})
export class ShowPendingComponent implements OnInit,AfterViewInit {

  @Input() pending;
  @Input() status;
  date: Date;
  title: string;
  name: string;
  uidUser: string;
  barterServiceName: string;
  modalStatus: string;
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(private userService: UserService,
              private serviceService: ServiceService,
              private reviewService: ReviewService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.pending);
    console.log(this.status);
    this.uidUser = this.userService.uid;
    this.getTitle().then(next => {
      this.title = next;
      this.getUsername().then(nextt => {
        this.name = nextt;
      })
    });
    this.date = this.getDate();
    if(typeof this.pending.price == 'string'){
      this.serviceService.convertUIDtoName(this.pending.price,this.pending.toUser).then(next => {
        this.barterServiceName = next;
      });
    }
    console.log(typeof this.pending.price);
  }

  getUsername(){
    return this.userService.convertUIDtoName(this.pending.fromUser==this.uidUser?this.pending.toUser:this.pending.fromUser);
  }

  getDate(){
    let date = new Date(this.pending.timestamp);
    return date;
  }

  getTitle(){
    return this.serviceService.convertUIDtoName(this.pending.uidService,(this.pending.fromUser==this.uidUser?this.pending.toUser:this.pending.fromUser));
  }

  openConfirm(){
    if(this.pending.type == 'request') {
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
        toast('Service bought succesfully! Wait for the prestator to confirm', 2000);
        return actions.payment.execute().then( (payment) => {
          this.onConfirm();
        })
      }
    }, '#paypal-button');
  });
}
    this.modalStatus = 'confirm';
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  isNumber(text) {
    return typeof text === 'number';
  }

  onConfirm(){
    this.serviceService.whenBuyService(this.pending);
    this.userService.getPendings().once('value', snap => {
      let pendings = snap.val();
      let index = pendings.findIndex( pending => {
        return pending.uidService == this.pending.uidService && pending.timestamp == this.pending.timestamp;
      });
      console.log(index);
      let sz = pendings.length;
      console.log(sz);
      console.log(pendings);
      pendings[sz-1] = [pendings[index],pendings[index]=pendings[sz-1]][0];
      pendings.pop();
      this.userService.getPendings().set(pendings).then( () => {
        toast('Service confirmed!',1000);
        this.modalActions.emit({action: 'modal', params:['close']});
        let notify = new NotifyModel(
          Date(),
          this.pending.type,
          true,
          false
        );
        let otherUserUID = this.pending.fromUser == this.userService.uid? this.pending.toUser:this.pending.fromUser;
        this.userService.getNotify(otherUserUID).push(notify);
      });
    })
  }

  onConfirmDone(){
    console.log('am intrat');
    let transServiceDone: TransServiceModel = JSON.parse(JSON.stringify(this.pending));
    console.log(this.pending);
    transServiceDone.status = 'done';
    console.log(this.pending);
    this.reviewService.afterPurchase = true;
    this.userService.getTransService().once('value', snap => {
      let aux = snap.val();
      console.log(aux);
      let transServices = [];
      for(let key in aux) transServices.push(aux[key]);

      let key = '';
      for(let key2 in aux){
        console.log(key2);
        console.log('Compare');
        console.log(aux[key2]);
        console.log(this.pending);
        console.log(this.compare(aux[key2],this.pending));
        if( this.compare(aux[key2],this.pending) && !key ) {
          key = key2;
        }
      }
      delete aux[key] ;
      console.log(key);
      console.log(aux);
      this.userService.getTransService().set(aux).then( () => {
        this.userService.getTransService().push(transServiceDone);
        toast('Congratulations!',1000);
        this.modalActions.emit({action: 'modal', params:['close']});
        //this.userService.actions = this.pending.action;
        this.router.navigate(['review/'+this.pending.uidService]);
      });
    })
  }

  openModalDone(){
    this.modalStatus = 'done';
    this.modalActions.emit({action:'modal', params:['open']});
  }

  compare(pending,pending2){
    return pending.uidService == pending2.uidService
    && pending.fromUser == pending2.fromUser
    && pending.toUser == pending2.toUser
    && pending.status == pending2.status;
  }

  ngAfterViewInit(): void {

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
