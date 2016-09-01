/* tslint:disable:no-unused-variable */

import { async, inject, TestBed } from '@angular/core/testing';
import { AutocompletionService } from './autocompletion.service';

import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('AutocompletionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers:[
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

  it('should create an instance of AutocompletionService',
    inject([AutocompletionService, Http],
      (service: AutocompletionService) => {
        expect(service).toBeTruthy();
      }));
});
