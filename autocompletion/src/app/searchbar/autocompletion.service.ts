import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const DEBOUNCE_TIME = 2000;
const AUTOCOMPLETE_URL = './users.json';

@Injectable()
export class AutocompletionService {

  constructor(private http: Http) { }

  autocompleteSearch(term: string) {
    console.log(`Term lookup: ${term}`);
    return this.http.get(`${AUTOCOMPLETE_URL}`)
      .debounceTime(DEBOUNCE_TIME);
  }
}
