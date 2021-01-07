import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TravelService } from '../services/travel.service';
import { UserService } from '../services/user.service';

import { CountryName } from '../shared/countryname';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  country: CountryName;
  links = [
    { path: '/home', title: 'Home' },
    { path: '/addTravel', title: 'AddTravel' },
    {path:'/viewTravel',title:'ViewTravel'},    
];
  constructor(public _userService:UserService,private _travelService:TravelService,private route: ActivatedRoute, 
    private router: Router ) {
      this.country=new CountryName();
     }

  ngOnInit(): void {
    
  }
  


  onSubmit()
  {

  this.router.navigate(['/country',this.country.name]);
  
  }


}
