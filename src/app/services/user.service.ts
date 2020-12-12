import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  username:String='';
  

  constructor(private http: HttpClient,private router: Router) {
    this.usersUrl = 'http://localhost:8080/';
  }


  public login(user: User) {
        //localStorage.setItem('username',user.name.valueOf());
            this.username=user.name;
    return this.http.post<User>(this.usersUrl+'login', user);
  }
  public signup(user: User) {
    //localStorage.setItem('username',user.name.valueOf());
    this.username=user.name;
    return this.http.post<User>(this.usersUrl+'signup', user);
  }

  public logout()
  {
   // localStorage.removeItem('username');
    this.username='';
    this.router.navigate(['/']);
  }
  

}
