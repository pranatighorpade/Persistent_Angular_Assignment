import { TestBed, inject } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('ThemeService', () => {
  let service: ThemeService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  beforeEach(inject(
    [ThemeService, HttpTestingController],
    (_service, _httpMock) => {
      service = _service;
      httpMock = _httpMock;
    }
  ));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 

});
