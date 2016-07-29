/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AutocompletionService } from './autocompletion.service';

describe('Service: Wunderground', () => {
  beforeEach(() => {
    addProviders([AutocompletionService]);
  });

  it('should ...',
    inject([AutocompletionService],
      (service: AutocompletionService) => {
        expect(service).toBeTruthy();
      }));
});
