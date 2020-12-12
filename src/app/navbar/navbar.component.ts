import { Component, OnInit } from '@angular/core';
import { TravelService } from '../services/travel.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links = [
    { path: '/home', title: 'Home' },
    { path: '/addTravel', title: 'AddTravel' },
    {path:'/viewTravel',title:'ViewTravel'},
    
    
   

    
];
  constructor(public _userService:UserService,private _travelService:TravelService) { }

  ngOnInit(): void {
    
  }

}
