import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../shared/country';
import { Travel } from '../shared/travel';
import { Traveller } from '../shared/traveller';
import {UserService} from './user.service'

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  
 
  
  user:String='';
  constructor(private http: HttpClient,private _userServcie:UserService,private router: Router) {
    //this.user=_userServcie.username; 
   // this.travelsUrl = `http://localhost:8080/users/${sessionStorage.getItem('username')}/travels`;
  }

  public getAllTravel()
  {
    return this.http.get<Travel>(`http://localhost:8080/users/${this._userServcie.username}/travels`);
  }

  public save(travel: Travel) {
    return this.http.post<Travel>(`http://localhost:8080/users/${this._userServcie.username}/travels`, travel);
  }
  public updateTravel(travel:Travel,id:Number)
  {
      return this.http.put<Travel>(`http://localhost:8080/users/${this._userServcie.username}/travels`+`/${id}`,travel);
  }
  public getCountry(countryname:String)
  {
    return this.http.get<Country[]>(`http://localhost:8080/users/${localStorage.getItem('username')}/country/${countryname}`);
  }
  
}
