import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { toast } from 'angular2-materialize';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import {text} from "@angular/core/src/render3/instructions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  error: string;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    this.error = '';
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.userService.loginUser(email, password).then( (response) => {
      response.user.getIdToken().then( token => {
        this.userService.token = token;
        this.userService.uid = response.user.uid;
        this.router.navigate(['dashboard']);
        toast('Loggin succesfull!', 1000);

        this.userService.getNotify(this.userService.uid).once('value',snap => {
          let notifyes = snap.val();
          let offer_true = 0;
          let offer_false = 0;
          let request_true = 0;
          let request_false = 0;
          if(notifyes){
            for(let key in notifyes) if(!notifyes[key].isShown) {
              notifyes[key].isShown = true;
              if (notifyes[key].type == 'offer') {
                if (notifyes[key].isValidation) {
                  offer_true++;
                } else {
                  offer_false++;
                }
              } else if (notifyes[key].isValidation) {
                request_true++;
              } else {
                request_false++;
              }
            }
            let textToShow = '';
            if(offer_true) textToShow += offer_true + ' oferte ti-au fost aprobate! </br>';
            if(offer_false) textToShow += 'Ai ' + offer_false + ' cereri pentru serviciile tale </br>';
            if(request_true) textToShow += offer_false + ' cereri ti-au fost aprobate </br>';
            if(request_false) textToShow += 'Ai ' + request_false + ' oferte pentru cererile tale';
            toast(textToShow,5000);
          }
          this.userService.getNotify(this.userService.uid).set(notifyes);
          //continue
        })
      });
    }).catch(error => this.error = error);
  }

  /*addCat() {
    const toAdd = [
      'IT',
      'Reparații',
      'Print, imprimerie și copiere',
      'Auto / Moto',
      'Agro',
      'Producție',
      'Construcții',
      'Mobilier si tâmplărie',
      'Croitorie, cizmărie și marochinărie',
      'Intermediere servicii, curierat, transport și livrări',
      'Depozitare',
      'Educatie, formare profesionala',
      'Artă',
      'Casă si grădină',
      'Cosmetică și relaxare',
      'Modă și frumusețe',
      'Organizari evenimente',
      'Imobiliare',
      'Consultanță și contabilitate',
      'Afaceri, echipamente firme',
      'Finante și asigurări',
      'Locuri de muncă',
      'Îngrijire animale',
      'Îngrijire copii si bătrâni'];
    firebase.database().ref('categories').set(toAdd)
      .then( () => console.log('Categories added!'));
  }*/

}
