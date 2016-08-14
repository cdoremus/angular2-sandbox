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
  searchTerm: string;
  dropdownStyle: any;
  isTermSelected = false;
  termSelected: Object = {};
  searchInput: FormControl = new FormControl();

  constructor(private autocompletionService: AutocompletionService) {
    // console.log("SearchbarComponent constructor called");
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
    // console.log("SearchbarComponent.ngOnInit() called");
    this.searchTerm = '';
    this.dropdownStyle = {display: 'none'};
  }

  suggestionSelected(suggestion: string) {
    this.isTermSelected = true;
    this.termSelected = suggestion;
    this.searchInput.setValue(suggestion['name']);
    this.dropdownStyle = {display: 'none'};
  }

  itemSelected(event, suggestion) {
    // console.log('Item selected with event', event);
    // console.log(`${event.code} key selected`);
    switch (event.keyCode) {
      case KeyCode.Enter: // code=13
        this.suggestionSelected(suggestion);
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
    // console.log('Input keydown event', event);
    // move to first li on down arrow (if one exists)
    let sibling = event.target.nextElementSibling;
    if (event.keyCode === KeyCode.ArrowDown && sibling) {
      if (sibling.children.length > 0) {
        sibling.children[0].focus();
      }
    }
  }
}
