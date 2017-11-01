import { TestBed, inject } from '@angular/core/testing';

import { AdfPentahoService } from './adf-pentaho.service';

describe('AdfPentahoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdfPentahoService]
    });
  });

  it('should be created', inject([AdfPentahoService], (service: AdfPentahoService) => {
    expect(service).toBeTruthy();
  }));
});
