import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [FlightsComponent,],
  imports: [
    CommonModule,
    MatTableModule
  ],
  providers: [],
  exports: [
  ]
})
export class FlightsModule { }
