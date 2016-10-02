import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { User } from './user.interfaces';

const DEBOUNCE_TIME = 2000;
const USERS_URL = './users.json';

// for use, see SearchbarComponent in autocompletion branch
@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  findUsers(): Observable<any> {
    return this.http.get(`${USERS_URL}`).flatMap(res => <User[]>res.json());
  }

  findUserById(id: number): Observable<User> {
    return this.http.get(`${USERS_URL}`).flatMap(res => <User[]>res.json()).filter(user => user.id == id);
  }

}