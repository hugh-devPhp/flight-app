import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from '../../../shared/models/flight.model';



@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrl: './flights-list.component.css',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule]
})
export class FlightsListComponent implements OnInit {
  displayedColumns: string[] = ['idFlight', 'companyName', 'flightType', 'travelType',
    'departureDate', 'departureTime', 'arrivaleDate', 'arrivaleTime', 'backDate',
    'backTime', 'departureLocation', 'arrivalLocation', 'flightDuration',
    'connectionDuration', 'aircraftType',];
  dataSource = new MatTableDataSource<Flight>([]);

  constructor() {
    const ELEMENT_DATA: Flight[] = [{
      idFlight: 1, companyName: 'Air France', flightType: 'Direct flight', travelType: 'Round trip',

      departureDate: new Date(), departureTime: new Date(), arrivaleDate: new Date(), arrivaleTime: new Date(),

      backDate: new Date(), backTime: new Date(), departureLocation: 'Paris', arrivalLocation: 'London',

      flightDuration: new Date(), connectionDuration: new Date(), aircraftType: 'Airbas',

    }]
    // flight = new MatTableDataSource<Flight>(ELEMENT_DATA);
  }

  ngOnInit(): void {
  }

}
