import { Component } from '@angular/core';
import { FlightsListComponent } from "../../../components/flights-list/flights-list.component";
import { SearchFormComponent } from "../../../../shared/components/search-form/search-form.component";

@Component({
  selector: 'app-flights-page',
  standalone: true,
  imports: [FlightsListComponent, SearchFormComponent],
  templateUrl: './flights-page.component.html',
  styleUrl: './flights-page.component.css'
})
export class FlightsPageComponent {

}
