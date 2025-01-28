import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatHeaderRowDef } from '@angular/material/table';
import { Flight } from '../../../shared/models/flight.model';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

const ELEMENT_DATA: Flight[] = [{
  idFlight: 1, companyName: 'Air France', flightType: 'Direct flight', travelType: 'Round trip',

  departureDate: new Date(), departureTime: new Date(), arrivaleDate: new Date(), arrivaleTime: new Date(),

  backDate: new Date(), backTime: new Date(), departureLocation: 'Paris', arrivalLocation: 'London',

  flightDuration: new Date(), connectionDuration: new Date(), aircraftType: 'Airbas',

}, {
  idFlight: 2, companyName: 'Air France', flightType: 'Direct flight', travelType: 'Round trip',

  departureDate: new Date(), departureTime: new Date(), arrivaleDate: new Date(), arrivaleTime: new Date(),

  backDate: new Date(), backTime: new Date(), departureLocation: 'Paris', arrivalLocation: 'London',

  flightDuration: new Date(), connectionDuration: new Date(), aircraftType: 'Airbas',
}]

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrl: './flights-list.component.css',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, MatHeaderRowDef, CommonModule, MatCheckboxModule]
})


export class FlightsListComponent implements OnInit {
  displayedColumns: string[] = ['idFlight', 'companyName', 'flightType', 'travelType',
    'departureDate', 'arrivaleDate', 'backDate', 'departureLocation', 'arrivalLocation',
    'flightDuration', 'aircraftType', 'select'];
  flight = new MatTableDataSource<Flight>(ELEMENT_DATA);

  constructor() { }
  get flights() {
    return this.flight.data;
  }
  ngOnInit(): void { '' }

}
