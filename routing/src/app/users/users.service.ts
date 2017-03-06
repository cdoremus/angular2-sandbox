import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { User } from './user.interfaces';

const USERS_URL = './users.json';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  findUsers(): Observable<any> {
    return this.http.get(`${USERS_URL}`)
      .flatMap(res => <User[]>res.json());
  }

  findUserById(id: number): Observable<User> {
    return this.findUsers()
      .filter(user => user.id == id);
  }

}