import { TestBed } from '@angular/core/testing';

import { ApiLineageIIService } from './api-lineage-ii.service';

describe('ApiLineageIIService', () => {
  let service: ApiLineageIIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLineageIIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
