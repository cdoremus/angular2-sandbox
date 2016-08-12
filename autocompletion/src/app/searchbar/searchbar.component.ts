import { Component, OnInit } from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { AutocompletionService } from './autocompletion.service';

const AUTOCOMPLETION_DELAY = 750;

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
  searchForm: FormGroup;
  searchInput: AbstractControl;

  constructor(private fb: FormBuilder, private autocompletionService: AutocompletionService) {
    this.suggestions = [];
    this.searchForm = fb.group({
      'searchInput': ['', Validators.required]
    });
    this.searchInput = this.searchForm.controls['searchInput'];

    this.searchInput.valueChanges
      .debounceTime(AUTOCOMPLETION_DELAY)
      .distinctUntilChanged()
      .subscribe(
        searchTerm => {
          if (searchTerm && searchTerm !== '' && !this.isTermSelected) {
            this.dropdownStyle = {display: 'inline'};
            this.autocompletionService.autocompleteSearch(searchTerm)
              .subscribe(resp => {
                let data = resp.json();
                // console.log("JSON Data: ", data);
                // filter results using search term
                let results = data.filter(person => person['name'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
                console.log('Filtered search results:', results);
                this.suggestions = results;
              });
          } else {
            this.dropdownStyle = {display: 'none'};
            this.isTermSelected = false;
          }
        }
      );

  }

  ngOnInit() {
    this.searchTerm = '';
    this.dropdownStyle = {display: 'none'};
  }

  suggestionSelected(suggestion: string) {
    this.isTermSelected = true;
    this.termSelected = suggestion;
    this.searchTerm = suggestion['name'];
    this.dropdownStyle = {display: 'none'};
  }

  itemSelected(event, suggestion) {
    // console.log('Item selected with event', event);
    // console.log(`${event.code} key selected`);
    switch (event.code) {
      case 'Enter':
        this.suggestionSelected(suggestion);
        break;
      case 'ArrowUp':
        // move to previous li on down arrow (if one exists)
        let prev = event.target.previousElementSibling
        if (prev) {
          prev.focus();
        }
        break;
      case 'ArrowDown':
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
    if (event.code === 'ArrowDown' && sibling) {
      if (sibling.children.length > 0) {
        sibling.children[0].focus();
      }
    }
  }
}
