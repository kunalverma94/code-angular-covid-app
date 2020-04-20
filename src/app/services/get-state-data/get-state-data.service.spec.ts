import { TestBed } from '@angular/core/testing';

import { GetStateDataService } from './get-state-data.service';

describe('GetStateDataService', () => {
  let service: GetStateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
