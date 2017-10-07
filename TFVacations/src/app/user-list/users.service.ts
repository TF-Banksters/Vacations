import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';

export interface User {
  Name: string;
  Country?: string;
}

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>('https://functionapp20171007010722.azurewebsites.net/api/GetUsers');
  }
}
