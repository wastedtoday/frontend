import { TestBed, inject } from '@angular/core/testing';

import { AfAuthService } from './af-auth.service';

describe('AfAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfAuthService]
    });
  });

  it('should ...', inject([AfAuthService], (service: AfAuthService) => {
    expect(service).toBeTruthy();
  }));
});
