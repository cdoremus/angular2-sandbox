/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SearchbarService } from './searchbar.service';

describe('Service: Searchbar', () => {
  beforeEach(() => {
    addProviders([SearchbarService]);
  });

  it('should ...',
    inject([SearchbarService],
      (service: SearchbarService) => {
        expect(service).toBeTruthy();
      }));
});
