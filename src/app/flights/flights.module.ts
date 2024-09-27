import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightsListComponent } from './components/flights-list/flights-list.component';
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [FlightsComponent, FlightsListComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  providers: [],
  exports: [
    FlightsListComponent
  ]
})
export class FlightsModule { }
