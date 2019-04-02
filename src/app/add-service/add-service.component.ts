import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/shared/services/service.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ServiceModel} from 'src/app/shared/service.model';
import { Router } from '@angular/router';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  images: Array<any>;
  imagesURL: Array<any>;
  serviceToAdd: any;
  uid: string;
  categories: string[];
  categoriesToShow: string[];

  form = new FormGroup({
    service_type: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    barter: new FormControl(''),
    price: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required])
  });

  constructor(private serviceService: ServiceService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.images = [];
    this.imagesURL = [];
    this.userService.getCategories().on('value', snap  => {
      this.categories = snap.val();
    });
  }

  addImages(index: number) {
    if(!index) this.imagesURL = [];
    if (index === this.images.length) {
      this.serviceToAdd = new ServiceModel(
        this.form.value.barter,
        this.form.value.title,
        this.form.value.desc,
        0,
        this.form.value.category,
        this.imagesURL,
        this.userService.uid,
        this.uid,
        this.form.value.service_type,
        'my_service',
        this.form.value.price
      );
      return;
    }
    const url = 'services/' + this.userService.uid + '/' + this.uid + '/' + index;
    const uploadTask = this.serviceService.addImage(url, this.images[index]);
    uploadTask.on('state_changed', snapshot => {}, error => {console.log(error)}, ()=>{
      this.userService.getImage(url).getDownloadURL().then( (resp) => {
        this.imagesURL.push(resp);
        console.log(this.imagesURL);
        console.log('Done image' + index);
        this.addImages(index+1);
      });
    });
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.uid = this.serviceService.getUniqueID();
      this.addImages(0);
      console.log(this.imagesURL);
      this.userService.getUsers().once( 'value', snap => {
        const users = snap.val();
        const index = users.findIndex(user => user.uid === this.userService.uid);
        const text = this.form.value.service_type;
        if(!users[index][text]) users[index][text] = [];
        users[index][text].push(this.uid);
        console.log(this.serviceToAdd);
        this.userService.updateDB(users).then( () => {
          this.serviceService.addService(this.serviceToAdd).then( () => {
            this.form.reset();
            toast('Service added succesfully!', 1000);
            this.router.navigate(['dashboard']);
          })
            .catch(err => console.log(err));
        })
          .catch(err => console.log(err));
      });
    }
  }

  onChange(event: any, input: any) {
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

}
