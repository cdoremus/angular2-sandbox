/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { SearchbarComponent } from './searchbar.component';
import { AutocompletionService } from './autocompletion.service';


describe('SearchbarComponent', () => {

    beforeEach(() => {
    TestBed.configureTestingModule({providers:[
      FormBuilder,
      AutocompletionService,
      BaseRequestOptions,
      MockBackend,
      // Provide a mocked (fake) backend for Http
      {
        provide: Http,
        deps: [MockBackend, BaseRequestOptions],
        useFactory: function useFactory(backend, defaultOptions) {
          return new Http(backend, defaultOptions);
        }
      }
      ]});
    });
  it('should create an instance',
    inject([FormBuilder, AutocompletionService, Http],
      (component: SearchbarComponent) => {
        expect(component).toBeTruthy();
      }));
});
