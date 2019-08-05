import {Component, OnInit, Input, AfterViewInit, EventEmitter} from '@angular/core';
import { ServiceModel } from 'src/app/shared/service.model';
import { toast } from 'angular2-materialize';
import { ServiceService } from 'src/app/shared/services/service.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'firebase';
import { UserModel } from 'src/app/shared/user.model';
import { MaterializeAction } from "angular2-materialize";
import {PendingModel} from "../../shared/pending.model";
import {NotifyModel} from "../../shared/notify.model";

declare let paypal: any;

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit,AfterViewInit {
  @Input() service: ServiceModel;
  modalActions = new EventEmitter<string|MaterializeAction>();

  amount: number = 0;
  label: string = '';
  isOkay: boolean = false;
  images: Array<any>;
  imagesURL: Array<any>;
  uidUser: any;
  userServices: ServiceModel[];
  modalStatus: string;
  selectedIndex: number;

  constructor(private userService: UserService, private serviceService: ServiceService) {
    this.images = [];
    this.imagesURL = [];
    this.uidUser = this.userService.uid;
  }

  author: UserModel;

  ngOnInit() {
    console.log(this.service);
    this.amount = this.service.price;
    this.label = this.service.title;
    this.userServices = [];
    this.selectedIndex = -1;

    this.serviceService.getDatabase().on('value', snap => {
      this.userServices = [];
      this.author = snap.val()['users'].filter( user => user.uid === this.service.fromUser)[0];
      let services = snap.val()['services'][this.userService.uid];
      console.log('servicii',services,this.userService.uid);
      for(let key in services) if(services[key][0].status == 'my_service' && services[key][0].uid == 'offer'){
        this.userServices.push(services[key][0]);
      }
      console.log(this.userServices);
    })
  }

  isAuth() {
    return this.userService.isAuthenticated();
  }

  doAfterPayment() {
    console.log('entered');
    let date = new Date();
    /*Only after confirming*/ // this.serviceService.whenBuyService(this.service);

    console.log(this.service.isOffer);
    let pending = new PendingModel(
      this.service.isOffer,
      this.service.uid,
      this.service.price,
      this.userService.uid,
      this.service.fromUser,
      date.getTime(),
      false,
      false,
      this.author.imageURL,
      '',
      ''
    );
    console.log(pending);
    this.userService.getUsers().once('value', snap => {
      let users = snap.val();
      let uidToPass = this.service.fromUser == this.uidUser?this.service.toUser:this.service.fromUser;
      users.filter( user => user.uid === uidToPass);
      pending.pictureToUser = users[0].imageURL;
      console.log(users);
      console.log(users[0].imageURL);
      this.userService.getPendings().once('value', snap => {
        let pendings = snap.val();
        if(!pendings)  pendings=[];
        pendings.push(pending);
        this.userService.getPendings().set(pendings);
        let notify = new NotifyModel(
          Date(),
          this.service.isOffer,
          false,
          false
        );
        let otherUserUID = this.service.fromUser;
        this.userService.getNotify(otherUserUID).push(notify);
      })
    });
  }

  ngAfterViewInit(): void {
    if(!this.isAuth() || this.service.isOffer == 'request') return;
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
          toast('Service bought succesfully! Wait for the prestator to confirm', 2000);
          return actions.payment.execute().then( (payment) => {
            this.doAfterPayment();
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

  openModal() {
    this.modalStatus = 'picture';
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  addImagesInDB(index: number, nr, data){
    if(!index) this.imagesURL = [];
    if (index === this.images.length) {
      let aux = data;
      aux.forEach(service => {
        if(!service.imagePath) service.imagePath = [];
        service.imagePath.push(...this.imagesURL);
      });
      this.serviceService.modifyService(this.userService.uid,this.service.uid,aux);
      this.modalActions.emit({action:'modal', params:['close']});
      toast('Poza adaugata cu succes!', 2000);
    }
    const url = 'services/' + this.userService.uid + '/' + this.service.uid + '/' + (nr+index);
    const uploadTask = this.serviceService.addImage(url, this.images[index]);
    uploadTask.on('state_changed', snapshot => {}, error => {console.log(error)}, ()=>{
      this.userService.getImage(url).getDownloadURL().then( (resp) => {
        this.imagesURL.push(resp);
        console.log(this.imagesURL);
        console.log('Done image ' + index);
        this.addImagesInDB(index+1, nr, data);
      });
    });
  }

  addImages(index: number) {
    this.serviceService.getService(this.userService.uid,this.service.uid).once('value', snap => {
      console.log(this.userService.uid,this.service.uid);
      console.log(snap.val());
      let nrPhotos = (snap.val()[0].imagePath?snap.val()[0].imagePath.length:0);
      this.addImagesInDB(0,nrPhotos,snap.val());
    });
  }

  onChange(event: any) {
    const files = [].slice.call(event.target.files);
    const indMax = files.length-1;
    for ( let i = 0;i<=indMax;++i) {
      if (event.target.files && files[i]) {
        const reader = new FileReader();
        reader.onload = (events: ProgressEvent) => {
          this.imagesURL.push((<FileReader>events.target).result);
        };
        console.log(files[i]);
        reader.readAsDataURL(files[i]);
        this.images.push(files[i]);
      }
    }
  }

  serviceOfThisUser() {
    return this.service.fromUser === this.userService.uid;
  }

  openBarterModal() {
    this.modalStatus = 'barter';
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  askBarter(){
    this.modalActions.emit({action: 'modal', params:['close']});
    console.log('entered');
    let date = new Date();

    console.log(this.service.isOffer);
    let pending = new PendingModel(
      this.service.isOffer,
      this.service.uid,
      this.userServices[this.selectedIndex],
      this.userService.uid,
      this.service.fromUser,
      date.getTime(),
      false,
      false,
      this.author.imageURL,
      '',
      ''
    );
    console.log(pending);
    this.userService.getUsers().once('value', snap => {
      let users = snap.val();
      let uidToPass = this.service.fromUser == this.uidUser?this.service.toUser:this.service.fromUser;
      users.filter( user => user.uid === uidToPass);
      pending.pictureToUser = users[0].imageURL;
      console.log(users);
      console.log(users[0].imageURL);
      this.userService.getPendings().once('value', snap => {
        let pendings = snap.val();
        if(!pendings)  pendings=[];
        pendings.push(pending);
        this.userService.getPendings().set(pendings).then( () => {
          toast('Cererea a fost facuta cu succes!',1000);
          let notify = new NotifyModel(
            Date(),
            this.service.isOffer,
            false,
            false
          );
          let otherUserUID = this.service.fromUser;
          this.userService.getNotify(otherUserUID).push(notify);
        });
      })
    });
  }

  selectService(index: number){
    if(index==this.selectedIndex)
      this.selectedIndex = -1;
    else this.selectedIndex = index;
  }

  confirmRequest(){
    toast('Te-ai oferit pentru prestarea serviciului! Felicitari!', 2000);
    this.doAfterPayment();
  }
}
