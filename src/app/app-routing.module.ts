import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { ViewTravelComponent } from './view-travel/view-travel.component';
import { UpdateComponent } from './update/update.component';
import { SignupComponent } from './signup/signup.component';
import { CountryComponent } from './country/country.component';
import { HeadComponent } from './head/head.component';





const routes: Routes = [
  {path:'',component:HeadComponent},
  { path: 'login', component: LoginComponent },
  {path:'signup',component:SignupComponent},
  {path:'home', component:HomeComponent},
  {path:'addTravel',component:AddTravelComponent},
  {path:'viewTravel',component:ViewTravelComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'country/:cname',component:CountryComponent}
  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }