import { TestBed } from '@angular/core/testing';

import { ProPlusApiService } from './pro-plus-api.service';

describe('ProPlusApiService', () => {
  let service: ProPlusApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProPlusApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
