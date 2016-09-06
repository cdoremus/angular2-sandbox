/**
 * Search Bar Component
 * A text input that does autocompletion/typeahead. It also handles navigation
 * through the various typeahead options using the Up and Down arrow keys.
 *
 * The autocompletion data comes from a call to the backend using the HttpService in
 * the HttpModule. This example has the service pull data from a JSON file rather
 * than doing a real remote http call.
 *
 * The following reference was very helpful in upgrading to RC5:
 * http://blog.thoughtram.io/angular/2016/06/22/model-driven-forms-in-angular-2.html
 *
 */
import { Component, OnInit } from '@angular/core';
import {
  FormControl
} from '@angular/forms';
import { AutocompletionService } from './autocompletion.service';

const AUTOCOMPLETION_DELAY = 750;

const enum KeyCode {
  Enter = 13,
  ArrowUp = 38,
  ArrowDown = 40
}

@Component({
  selector: 'cd-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./autocomplete.css', './searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  suggestions: Array<string>; /// make this an input
  dropdownStyle: any;
  isTermSelected = false;
  termSelected: Object = {};
  personSelected: Object = {};
  searchInput: FormControl = new FormControl();
  searchButtonIndex: number = -1;

  constructor(private autocompletionService: AutocompletionService) {
    this.suggestions = [];
    this.searchInput.valueChanges
      .debounceTime(AUTOCOMPLETION_DELAY)
      .distinctUntilChanged()
      .subscribe(
        searchTerm => {
          if (searchTerm && searchTerm !== '' && !this.isTermSelected) {
            this.dropdownStyle = {display: 'inline'};
            this.autocompletionService.autocompleteSearch(searchTerm)
              .subscribe(
                resp => {
                  let data = resp.json();
                  // console.log("JSON Data: ", data);
                  // filter results using search term
                  let results = data.filter(person => person['name'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
                  console.log('Filtered search results:', results);
                  this.suggestions = results;
                  this.searchButtonIndex = this.suggestions.length + 2;
                },
                error => {
                  console.log('Error doing autocompletion search', error);
                }
                );
          } else {
            this.dropdownStyle = {display: 'none'};
            this.isTermSelected = false;
          }
        },
        error => {
          console.log('Error in input component valueChanges event', error);
        }
      );

  }

  ngOnInit() {
    this.dropdownStyle = {display: 'none'};
  }

  suggestionSelected(suggestion: string, searchTermInput) {
    this.isTermSelected = true;
    this.termSelected = suggestion;
    this.searchInput.setValue(suggestion['name']);
    this.dropdownStyle = {display: 'none'};
    this.searchButtonIndex = 2;
    searchTermInput.focus();
  }

  itemSelected(event, suggestion, searchTermInput) {
    switch (event.keyCode) {
      case KeyCode.Enter: // code=13
        this.suggestionSelected(suggestion, searchTermInput);
        break;
      case KeyCode.ArrowUp: // code=38
        // move to previous li on down arrow (if one exists)
        let prev = event.target.previousElementSibling;
        if (prev) {
          prev.focus();
        }
        break;
      case KeyCode.ArrowDown: // code=40
        // move to next li on down arrow (if one exists)
        // an occasional 'not a function' error is generated
        if (event.target.nextSibling.focus) {
          event.target.nextSibling.focus();
        }
        break;
    }
  }

  inputKeydown(event) {
    console.log("inputKeydown event:", event);

    // move to first li on down arrow (if one exists)
    let sibling = event.target.nextElementSibling;
    if (event.keyCode === KeyCode.ArrowDown && sibling) {
      if (sibling.children.length > 0) {
        sibling.children[0].focus();
      }
    }
  }

  search(event) {
    console.log(`Person selected:`, this.termSelected);
    this.personSelected = this.termSelected;
  }
}
