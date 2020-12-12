import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import { UserService } from './services/user.service';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { ViewTravelComponent } from './view-travel/view-travel.component';
import { UpdateComponent } from './update/update.component';
import { SignupComponent } from './signup/signup.component';
import { CountryComponent } from './country/country.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    AddTravelComponent,
    ViewTravelComponent,
    UpdateComponent,
    SignupComponent,
    CountryComponent,
    FooterComponent,
    HeadComponent,
    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }