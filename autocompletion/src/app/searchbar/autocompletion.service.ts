import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

const DEBOUNCE_TIME = 2000;
const AUTOCOMPLETE_URL = './users.json';

@Injectable()
export class AutocompletionService {

  constructor(private http: Http) { }

  getCities(searchTerm: string) {
    console.log("Search term: ", searchTerm);
    return this.autocompleteSearch(searchTerm)
      .debounceTime(DEBOUNCE_TIME)
      .distinctUntilChanged();
  }

  autocompleteSearch(term: string) {
    console.log(`Term lookup: ${term}`);
    return this.http.get(`${AUTOCOMPLETE_URL}`)
      .debounceTime(DEBOUNCE_TIME);
  }
}
