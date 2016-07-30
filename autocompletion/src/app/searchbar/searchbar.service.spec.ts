import { addProviders, inject } from '@angular/core/testing';
import { SearchbarService } from './searchbar.service';

describe('SearchbarService', () => {
  beforeEach(() => {
    addProviders([SearchbarService]);
  });

  it('should create an instance',
    inject([SearchbarService],
      (service: SearchbarService) => {
        expect(service).toBeTruthy();
      }));
});
