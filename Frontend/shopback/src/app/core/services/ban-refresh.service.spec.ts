import { TestBed } from '@angular/core/testing';

import { BanRefreshService } from './ban-refresh.service';

describe('BanRefreshService', () => {
  let service: BanRefreshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanRefreshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
