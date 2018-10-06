import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchBarComponent } from './home-page/search-bar/search-bar.component';
import { PartnersComponent } from './home-page/partners/partners.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './dashboard/services/service/service.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewsComponent } from './profile/reviews/reviews.component';
import { ReviewComponent } from './profile/reviews/review/review.component';
import { FilterComponent } from './services/filter/filter.component';
import { AllServicesComponent } from './services/all-services/all-services.component';
import { OfferComponent } from './services/all-services/offer/offer.component';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { SupportComponent } from './support/support.component';
import { FooterComponent } from './footer/footer.component';

import { StarRatingModule } from 'angular-star-rating';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'add_service', component: AddServiceComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'services', component: ServicesComponent, children: [
    { path: ':id', component: ServiceComponent},
  ]},
  { path: 'support', component: SupportComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    SearchBarComponent,
    PartnersComponent,
    AddServiceComponent,
    DashboardComponent,
    ServicesComponent,
    ServiceComponent,
    FeedbackComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ReviewsComponent,
    ReviewComponent,
    FilterComponent,
    AllServicesComponent,
    OfferComponent,
    ServiceDetailsComponent,
    SupportComponent,
    FooterComponent,
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    StarRatingModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
