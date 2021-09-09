import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../_models/flights.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  getFlights(): Observable<any> {
    return this.http.get('http://localhost:3000/flights/');
  }

  postFlight(flight: Flight) {

  }

  deleteFlight(id: number) {

  }
}
