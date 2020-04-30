import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Statistics } from 'src/app/Models/Statistics';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getStatistics(): Observable<Statistics> {
    return this.http.get<Statistics>(environment.API.STATISTICSSERVICE).pipe(
      map((data: any) => ({
        CasesTimeSeries: data.cases_time_series,
        StateWise: data.statewise,
        tested: data.tested,
      }))
    );
  }
}
