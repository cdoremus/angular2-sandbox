import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

const userJson =  require('./users.json');

@Injectable()
export class ApiService {
  title = 'Angular 2';
  private users: User[] = [];
  usersObservable: Observable<User[]>;

  constructor() {
    let usersJson = userJson;
    // use object destructuring to create User[] from JSON
    for (let user of usersJson) {
      let {id, name, username, email} = user;
      this.users.push({id, name, username, email});
    }
    this.usersObservable = Observable.of(this.users);
  }

  getUsers(): Observable<User[]> {
    return this.usersObservable;
  }

  getRandomUser(): User {
    let rand: number = Math.floor(Math.random() * this.users.length);
    let randomUser = this.users[rand];
    console.log('Random user: ', randomUser);
    return randomUser;
  }

}
