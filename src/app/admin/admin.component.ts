import { Component, OnInit } from '@angular/core';
import { Flight } from '../_models/flights.model';
import { FlightsService } from '../_services/flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private flightService: FlightsService) { }

 
  origin: string;
  destination: string;
  flightNumber: number;
  depart: Date;
  arrive: Date;
  nonstop: boolean = false;
  flightList: any[];

  ngOnInit(): void {
    this.refresh();
  }

  toggleNonStop(){
    this.nonstop = !this.nonstop;
  }

  sendFlight(){
    const flight: Flight = {
      origin: this.origin, 
      destination: this.destination,
      flightNumber: this.flightNumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop
    }
    this.flightService.postFlight(flight);
  }

  update(flight:Flight){
    this.flightService.updateFlight(flight).subscribe(data =>{
      console.log('data is', data);
      if(data && data['affected']){
        this.refresh();
      }
    });
  }

  refresh(){
    this.flightService.getAllFlights().subscribe(data =>{
      this.flightList = data;
    })
  }

}