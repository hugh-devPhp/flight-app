import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _searchCriteresForm!: FormGroup;
  constructor() { }

  public get searchCriteresForm(): FormGroup {
    return this._searchCriteresForm;
  }
  public set searchCriteresForm(value: FormGroup) {
    this._searchCriteresForm = value;
  }
   
  creatSearchCriteresForm(){
    this.searchCriteresForm = new FormGroup({
      company: new FormControl(''),
      flightType: new FormControl(''),
      travelType: new FormControl(''),
      aircraftType: new FormControl(''),
      departureLocation: new FormControl(''),
      arrivalLocation: new FormControl(''),
      departureDateMin: new FormControl(''),
      departureDateMax: new FormControl(''),
      departureTimeMin: new FormControl(''),
      departureTimeMax: new FormControl(''),
      arrivalDateMin: new FormControl(''),
      arrivalDateMax: new FormControl(''),
      arrivalTimeMin: new FormControl(''),
      arrivalTimeMax: new FormControl(''),
      flightDurationMin: new FormControl(''),
      flightDurationMax: new FormControl(''),
      fareMin: new FormControl(''),
      fareMax: new FormControl(''),
      backDateMin: new FormControl(''),
      backDateMax: new FormControl(''),
      backTimeMin: new FormControl(''),
      backTimeMax: new FormControl(''),
      connectionDurationMin: new FormControl(''),
      connectionDurationMax: new FormControl(''),
    });
  }
  
}
