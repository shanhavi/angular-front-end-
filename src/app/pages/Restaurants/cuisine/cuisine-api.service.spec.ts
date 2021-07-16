import { TestBed } from '@angular/core/testing';

import { CuisineApiService } from './cuisine-api.service';

describe('CuisineApiService', () => {
  let service: CuisineApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuisineApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
