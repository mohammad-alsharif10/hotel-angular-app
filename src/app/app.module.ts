import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccomodationComponent} from './accomodation/accomodation.component';
import {FoodBeverageComponent} from './food-beverage/food-beverage.component';
import {RestaurantComponent} from './food-beverage/restaurant/restaurant.component';
import {BarComponent} from './food-beverage/bar/bar.component';
import {LifestyleComponent} from './lifestyle/lifestyle.component';
import {WellnessAndSpaComponent} from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import {ResortActivitiesComponent} from './lifestyle/resort-activities/resort-activities.component';
import {ExperiencesComponent} from './lifestyle/experiences/experiences.component';
import {ExcursionsComponent} from './lifestyle/excursions/excursions.component';
import {WeddingsComponent} from './weddings/weddings.component';
import {TahiWeddingsComponent} from './weddings/tahi-weddings/tahi-weddings.component';
import {WesternWeddingsComponent} from './weddings/western-weddings/western-weddings.component';
import {OffersComponent} from './offers/offers.component';
import {CelebrationsComponent} from './celebrations/celebrations.component';
import {AuthComponent} from './auth/auth.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    FoodBeverageComponent,
    RestaurantComponent,
    BarComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    TahiWeddingsComponent,
    WesternWeddingsComponent,
    OffersComponent,
    CelebrationsComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
