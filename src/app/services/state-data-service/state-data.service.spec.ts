import { TestBed } from '@angular/core/testing';
import { StateDataService } from './state-data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';

describe('GetStateDataService', () => {
  let service: StateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(StateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    spyOn(service, 'getStatistics').and.returnValue(of({ x: 99 }));
    expect(service.getStatistics()).toBeDefined();
  });
});
