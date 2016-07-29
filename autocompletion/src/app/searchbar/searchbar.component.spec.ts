/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SearchbarComponent } from './searchbar.component';


describe('Component: Searchbar', () => {
  it('should create an instance', () => {
    let component = new SearchbarComponent(null, null);
    expect(component).toBeTruthy();
  });
});
