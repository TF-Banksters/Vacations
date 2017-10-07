import { inject, TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('UsersService', () => {
  let usersService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsersService, HttpClient]
    });
    usersService = TestBed.get(UsersService);
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
