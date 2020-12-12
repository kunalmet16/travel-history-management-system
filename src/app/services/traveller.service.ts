import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Travel } from '../shared/travel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravellerService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/traveller';
  }

  public findAll(): Observable<Travel[]> {
    return this.http.get<Travel[]>(this.usersUrl);
  }

  public save(travel: Travel) {
    return this.http.post<Travel>(this.usersUrl, travel);
  }
}
