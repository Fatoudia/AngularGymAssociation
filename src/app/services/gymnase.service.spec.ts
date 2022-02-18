import { TestBed } from '@angular/core/testing';

import { GymnaseService } from './gymnase.service';

describe('GymnaseService', () => {
  let service: GymnaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymnaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
