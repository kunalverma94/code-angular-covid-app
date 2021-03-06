import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';

describe('GetNewsService', () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getNews', () => {
    expect(service.getNews()).toBeDefined();
  });
  it('seednews present', () => {
    expect(service.seednews).toBeDefined();
  });
});
