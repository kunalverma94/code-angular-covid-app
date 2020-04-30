import { TestBed } from '@angular/core/testing';

import { StatisticsService } from './statistics.service';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('GetStatisticsService', () => {
  let service: StatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(StatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    spyOn(service, 'getStatistics').and.returnValue(of({ x: 99 } as any));
    expect(service.getStatistics()).toBeDefined();
  });
});
