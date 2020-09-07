
import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from '../../services/auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

const mockUsers = [
  {
    id: '1',
    email: 'tavisca@gmail.com',
    password: 'Tavisca@123',
  },
];

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    this.service = TestBed.inject(AuthService);
  });

  beforeEach(inject(
    [AuthService, HttpTestingController],
    (_service, _httpMock) => {
      service = _service;
      httpTestingController = _httpMock;
    }
  ));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login: should return an array containing the valid user', () => {
    const mockCheckLoginUser = {
      id: '1',
      email: 'tavisca@gmail.com',
      password: 'Tavisca@123',
    };
    this.service
      .login({
        email: 'Persistent@gmail.com',
        password: 'Persi@123',
      })
      .subscribe((user) => {
        expect(user).toBeDefined();
        expect(user.length).toBe(1);
        expect(user.id).toBe(1);
      });
    const req = httpTestingController.expectOne(
      'http://localhost:3000/username?email=' +
        mockCheckLoginUser.email +
        '&password=' +
        mockCheckLoginUser.password
    );
    req.flush(mockUsers);
    httpTestingController.verify();
  });

  it('signup: should return an array containing the valid user', () => {
    const mockCheckLoginUser = {
      name: 'test',
      email: 'test@gmail.com',
      password: 'Test@123',
    };
    this.service.signUp(mockCheckLoginUser).subscribe((user) => {
      expect(user).toBeDefined();
      expect(user.id).toBeDefined();
      expect(user.name).toBe(mockCheckLoginUser.name);
      expect(user.email).toBe(mockCheckLoginUser.email);
      expect(user.password).toBe(mockCheckLoginUser.password);
    });
    const req = httpTestingController.expectOne('http://localhost:3000/username');
    req.flush(mockUsers);
    httpTestingController.verify();
  });
}); 
 
