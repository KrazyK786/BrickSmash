import { TestBed } from '@angular/core/testing';

import { BricksmashService } from './bricksmash.service';

describe('BricksmashService', () => {
  let service: BricksmashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BricksmashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
