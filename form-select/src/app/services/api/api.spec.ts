import {
  addProviders,
  inject
} from '@angular/core/testing';

import {Api} from './api';

describe('Api Service', () => {

  beforeEach(() => {
    addProviders([Api]);
  });

  it('should ...', inject([Api], (api: Api) => {
    expect(api.title).toBe('Angular 2');
  }));

});
