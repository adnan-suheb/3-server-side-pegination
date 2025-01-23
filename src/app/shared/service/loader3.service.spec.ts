import { TestBed } from '@angular/core/testing';

import { Loader3Service } from './loader3.service';

describe('Loader3Service', () => {
  let service: Loader3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loader3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
