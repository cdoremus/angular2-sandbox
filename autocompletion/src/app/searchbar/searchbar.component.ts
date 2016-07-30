import { Component, OnInit } from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { AutocompletionService } from './autocompletion.service';

const AUTOCOMPLETION_DELAY = 750;

@Component({
  selector: 'cd-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./autocomplete.css'],
  providers: [AutocompletionService],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
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
            this.dropdownStyle = {display: 'block'};
            this.autocompletionService.autocompleteSearch(searchTerm)
              .subscribe(resp => {
                let data = resp.json();
                // console.log("JSON Data: ", data);
                // filter results using search term
                let results = data.filter(person => person['name'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
                console.log("Filtered search results: ", results);
                this.suggestions = results;
              });
          } else {
            this.dropdownStyle = {display: 'none'};
            this.isTermSelected = false;
          }
        }
      );

    // this.suggestions  = ['one', 'two', 'three', 'four', 'five'];
  }

  ngOnInit() {
    this.searchTerm = '';
    this.dropdownStyle = {display: 'none'};
  }

  suggestionSelected(suggestion: string) {
    this.isTermSelected = true;
    console.log(`Suggestion selected:`, suggestion);
    this.termSelected = suggestion;
    this.searchTerm = suggestion['name'];
    this.dropdownStyle = {display: 'none'};
  }

}
