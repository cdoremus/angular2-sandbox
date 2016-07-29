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
  termSelected = false;
  searchForm: FormGroup;
  searchInput: AbstractControl;

  constructor(private fb: FormBuilder, private autocompletionService: AutocompletionService) {
    this.suggestions = [];
    this.searchForm = fb.group({
      'searchInput': ['', Validators.required]
    });
    this.searchInput = this.searchForm.controls['searchInput'];

    this.searchInput.valueChanges
      .debounceTime(750)
      .distinctUntilChanged()
      .subscribe(
        searchTerm => {
          if (searchTerm && searchTerm !== '') {
            this.dropdownStyle = {display: 'block'};
            this.autocompletionService.autocompleteSearch(searchTerm)
              .subscribe(resp => {
                let data = resp.json();
                // console.log("JSON Data: ", data);
                // filter results using search term
                let results = data.filter(person => person['name'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
                console.log("Filtered search results: ", results);
                this.suggestions = results;
              });
          } else {
              this.dropdownStyle = {display: 'none'};
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
    this.termSelected = true;
    console.log(`Suggestion selected: ${suggestion}`);
  }

  keyup(): void {
    console.log(`Search term: ${this.searchTerm}`);
    // toggle visability of display
    if (!this.searchTerm || this.searchTerm === '') {
      this.dropdownStyle = {display: 'none'};
    } else {
      this.dropdownStyle = {display: 'block'};
      console.log(`Search term: ${this.searchTerm}`);

      // this.autocompletionService.getCities(this.searchTerm)
      //     .subscribe( response => {
      //       console.log(`Response`, response);
      //     });

      // let results = this.wundergroundService.autocompleteSearch(this.searchTerm);
      // console.log("Search results: ", results);

      this.autocompletionService.autocompleteSearch(this.searchTerm)
        .subscribe(resp => {
          let data = resp.json();
          let results = data.filter(person => person['name'].substring(this.searchTerm) != -1)
          console.log("Search results: ", results);
          this.suggestions = results;
        });

    }
  }

}
