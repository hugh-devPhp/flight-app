import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule, NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule,
    CommonModule
  ],
})
export class SearchFormComponent {
  showConnection = true;
  showBack = true;
  searchFlightForm!: FormGroup;
  timeTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#3f51b5',
      buttonColor: '#fff'
    },
    dial: {
      dialBackgroundColor: '#B2CDD7',
      dialEditableBackgroundColor: '#000000'
    },
    clockFace: {
      clockFaceBackgroundColor: '#F1F1F1',
      clockHandColor: '#3f51b5',
      clockFaceTimeInactiveColor: '#000000'
    }

  }
  constructor(private readonly sharedService: SharedService) { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.sharedService.creatSearchCriteresForm();
    this.searchFlightForm = this.sharedService.searchCriteresForm;
  }

  resetForm(form: FormGroup) {
    form.reset();
  }

  searchFlight() {
    const searchFlightValues = this.searchFlightForm;
    console.log(searchFlightValues);
  }

  selectedFlightType(value: string) {
    if (value == 'Direct flight') {
      this.showConnection = false;
    }
    else {
      this.showConnection = true;
    }
  }

  selectedTripType(value: string) {
    if (value == 'One-Way ticket') {
      this.showBack = false;
    }
    else {
      this.showBack = true;
    }
  }


}
