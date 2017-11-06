import { TestBed, inject } from '@angular/core/testing';

import { PentahoDashboardService } from './pentaho-dashboard.service';

describe('AdfPentahoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PentahoDashboardService]
    });
  });

  it('should be created', inject([PentahoDashboardService], (service: PentahoDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
