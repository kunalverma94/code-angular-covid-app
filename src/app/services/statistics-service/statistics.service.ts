import { Injectable } from '@angular/core';
import * as data from './data.json';
import { Observable, of } from 'rxjs';
import { Statistics, CasesTimeSeries } from './Statistics';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getStatistics(): Observable<Statistics> {
    return this.http
      .get<Statistics>('https://api.covid19india.org/data.json')
      .pipe(
        map((data: any) => ({
          CasesTimeSeries: data.cases_time_series,
          StateWise: data.statewise,
          tested: data.tested,
        }))
      );
    //  return of({ CasesTimeSeries: data.cases_time_series, StateWise: data.statewise, tested: data.tested });
  }
}
