import { TestBed } from '@angular/core/testing';

import { ProPlusService } from './pro-plus.service';

describe('ProPlusService', () => {
  let service: ProPlusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProPlusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
