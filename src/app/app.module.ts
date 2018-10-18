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
import { ServicesComponent } from './dashboard/services/services.component';
import { ShowServiceComponent } from './dashboard/services/show-service/show-service.component';
import { ServiceComponent } from './service/service.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewsComponent } from './service/reviews/reviews.component';
import { ReviewComponent } from './service/reviews/review/review.component';
import { FilterComponent} from 'src/app/all-services/filter/filter.component';
import { AllServicesComponent } from 'src/app/all-services/all-services.component';
import { AllOffersComponent } from 'src/app/all-services/all-offers/all-offers.component';
import { OfferComponent } from 'src/app/all-services/all-offers/offer/offer.component';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { SupportComponent } from './support/support.component';
import { FooterComponent } from './footer/footer.component';

import { StarRatingModule } from 'angular-star-rating';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuardService } from 'src/app/shared/services/user-auth-guard.service';

import {NgxPaginationModule} from 'ngx-pagination';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'add_service', component: AddServiceComponent, canActivate: [UserAuthGuardService]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [UserAuthGuardService]},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'services', children: [
    { path: '', component: AllServicesComponent, pathMatch: 'full'},
    { path: ':category', component: AllServicesComponent, pathMatch: 'full'},
    { path: ':id', component: ServiceComponent}
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
    ShowServiceComponent,
    FeedbackComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ReviewsComponent,
    ReviewComponent,
    FilterComponent,
    AllOffersComponent,
    OfferComponent,
    ServiceDetailsComponent,
    SupportComponent,
    FooterComponent,
    AllServicesComponent,
    ServiceComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    StarRatingModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AutoCompleteModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
