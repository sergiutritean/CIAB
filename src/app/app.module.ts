import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchBarComponent } from './home-page/search-bar/search-bar.component';
import { PartnersComponent } from './home-page/partners/partners.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './dashboard/services/services.component';
import { ServiceComponent } from './dashboard/services/service/service.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewsComponent } from './profile/reviews/reviews.component';
import { ReviewComponent } from './profile/reviews/review/review.component';
import { FilterComponent } from './services/filter/filter.component';
import { AllOffersComponent } from './services/all-offers/all-offers.component';
import { OfferComponent } from './services/all-offers/offer/offer.component';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { SupportComponent } from './support/support.component';

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
    AllOffersComponent,
    OfferComponent,
    ServiceDetailsComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
