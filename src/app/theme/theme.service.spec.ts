import { TestBed, inject } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  beforeEach(inject([ThemeService], (serviceName) => {
    service = serviceName;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
