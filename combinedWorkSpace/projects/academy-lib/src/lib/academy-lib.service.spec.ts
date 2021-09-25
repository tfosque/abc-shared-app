import { TestBed } from '@angular/core/testing';

import { AcademyLibService } from './academy-lib.service';

describe('AcademyLibService', () => {
  let service: AcademyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
