import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../_services/flights.service';
import { Flight } from '../_models/flights.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights: Flight[] = [];

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flights = this.flightsService.getFlights();
  }

  getFlights() {

  }

}