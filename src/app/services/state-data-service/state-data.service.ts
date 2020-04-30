import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class StateDataService {
  constructor(private http: HttpClient) {}

  getStatistics(): Observable<any> {
    return this.http.get(environment.API.STATEDATASERVICE);
  }
}
