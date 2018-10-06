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

  uid: string;

  form = new FormGroup({
    service_type: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    barter: new FormControl(''),
    price: new FormControl('', [Validators.required])
  });

  constructor(private serviceService: ServiceService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.images = [];
    this.imagesURL = [];
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('altcv');
      this.uid = this.serviceService.getUniqueID();
      this.addImages(0);
      const serviceToAdd = new ServiceModel(
        this.form.value.barter,
        this.form.value.title,
        this.form.value.desc,
        0,
        '',
        this.imagesURL,
        this.userService.uid,
        this.uid,
        this.form.value.service_type
      );
      this.userService.getUsers().on( 'value', snap => {
        const users = snap.val();
        const index = users.findIndex(user => user.uid === this.userService.uid);
        const text = this.form.value.service_type;
        users[index][text].push(this.uid);
        this.userService.updateDB(users).then( () => {
          this.serviceService.addService(serviceToAdd).then( () => {
            this.form.value.clear();
            toast('Service added succesfully!', 1000);
            this.router.navigate(['dashboard']);
          })
            .catch(err => console.log(err));
        })
          .catch(err => console.log(err));
      });
    }
  }

  addImages(index: number) {
    console.log(index);
    if (index === this.images.length) {
      return;
    }
    const url = 'services/' + this.userService.uid + '/' + this.uid;
    const uploadTask = this.serviceService.addImage(url, this.images[index]);
    uploadTask.on('value_changes', snapshot => {}, error => {console.log(error)}, ()=>{
      console.log('Done image' + index);
      this.addImages(index+1);
    });
  }

  onChange(event: any, input: any) {
    const files = [].slice.call(event.target.files);
    input.value = files.map(f => f.name).join(', ');
    const indMax = event.target.files.length-2;
    for ( let i = 0;i<=indMax;++i) {
      if (event.target.files && event.target.files[i]) {
        const reader = new FileReader();

        reader.onload = (events: ProgressEvent) => {
          this.imagesURL.push((<FileReader>events.target).result);
        };
        console.log(event.target.files[i]);
        reader.readAsDataURL(event.target.files[i]);
        this.images.push(event.target.files[i]);
      }
    }

  }

}
