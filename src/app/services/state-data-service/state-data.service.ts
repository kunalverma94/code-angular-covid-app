import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as data from './state.json';

@Injectable({
  providedIn: 'root',
})
export class StateDataService {
  constructor(private http: HttpClient) {}

  getStatistics(): Observable<any> {
    return this.http.get('https://api.covid19india.org/state_district_wise.json');
    //return of(data);
  }
}
export interface StateData {
  state?: string;
  districts?: District[];
  statecode?: string;
}
export interface District {
  district: string;
  active: number;
  confirmed: number;
  deceased: number;
  recovered: number;
}
