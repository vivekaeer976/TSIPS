import { TestBed } from '@angular/core/testing';

import { TreatyserviceService } from './treatyservice.service';

describe('TreatyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreatyserviceService = TestBed.get(TreatyserviceService);
    expect(service).toBeTruthy();
  });
});
