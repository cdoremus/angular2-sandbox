import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const DEBOUNCE_TIME = 2000;
const AUTOCOMPLETE_URL = './users.json';

// for use, see SearchbarComponent in autocompletion branch
@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  findUsers(term: string) {
    return this.http.get(`${AUTOCOMPLETE_URL}`);
  }
}