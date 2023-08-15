import { TestBed } from '@angular/core/testing';

import { TimeSortService } from './time-sort.service';

describe('TimeSortService', () => {
  let service: TimeSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
